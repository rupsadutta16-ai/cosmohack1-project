// Simple in-memory user storage (replace with database in production)
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "..", "data", "users.json");

class User {
  constructor() {
    this.users = this._loadUsers();
    this.nextId = Math.max(...this.users.map((u) => u.id), 0) + 1;
  }

  _loadUsers() {
    try {
      const data = fs.readFileSync(usersFilePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        // File not found, return an empty array or initial data
        console.warn("users.json not found, initializing with default users.");
        return [
          {
            id: 1,
            username: "admin",
            email: "admin@credlocker.com",
            fullName: "System Administrator",
            password: bcrypt.hashSync("password", 10),
            role: "admin",
            level: 1,
            experiencePoints: 0,
            completedTasks: [],
            createdAt: new Date(),
          },
          {
            id: 2,
            username: "user",
            email: "user@credlocker.com",
            fullName: "User",
            password: bcrypt.hashSync("password", 10),
            role: "user",
            level: 1,
            experiencePoints: 0,
            completedTasks: [],
            createdAt: new Date(),
          },
        ];
      }
      console.error("Error loading users from file:", error);
      return [];
    }
  }

  _saveUsers() {
    try {
      fs.writeFileSync(
        usersFilePath,
        JSON.stringify(this.users, null, 2),
        "utf8"
      );
    } catch (error) {
      console.error("Error saving users to file:", error);
    }
  }

  async create(userData) {
    // Check if username or email already exists
    const existingUser = this.users.find(
      (u) => u.username === userData.username || u.email === userData.email
    );

    if (existingUser) {
      throw new Error("Username or email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create new user
    const newUser = {
      id: this.nextId++,
      username: userData.username,
      email: userData.email,
      fullName: userData.fullName,
      password: hashedPassword,
      role: "user",
      level: 1, // Default level
      experiencePoints: 0, // Default experience points
      completedTasks: [], // Array to store IDs of completed tasks
      createdAt: new Date(),
    };

    this.users.push(newUser);
    this._saveUsers(); // Save after creating a new user
    return { ...newUser, password: undefined }; // Don't return password
  }

  async findByUsername(username) {
    return this.users.find((u) => u.username === username);
  }

  async findByEmail(email) {
    // When finding by email, we also need the password for potential login flows,
    // so don't strip it here.
    return this.users.find((u) => u.email === email);
  }

  async findById(id) {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      // Only strip password when returning for display purposes, not for internal use
      return { ...user, password: undefined };
    }
    return null;
  }

  async validatePassword(user, password) {
    // Ensure the user object passed here still contains the password hash
    return await bcrypt.compare(password, user.password);
  }

  getAllUsers() {
    // When getting all users, strip passwords for security before returning
    return this.users.map((u) => ({ ...u, password: undefined }));
  }

  async updateGamificationProgress(
    userId,
    newLevel,
    newExperiencePoints,
    newCompletedTasks
  ) {
    const userIndex = this.users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      throw new Error("User not found");
    }

    this.users[userIndex].level = newLevel;
    this.users[userIndex].experiencePoints = newExperiencePoints;
    this.users[userIndex].completedTasks = newCompletedTasks;
    this._saveUsers(); // Save after updating gamification progress
    return { ...this.users[userIndex], password: undefined };
  }
}

module.exports = new User();
