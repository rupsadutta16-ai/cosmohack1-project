const learningTasks = [
  {
    id: "task-1",
    title: "Secure Your Passwords",
    description:
      "Learn to create strong, unique passwords and use a password manager.",
    experienceReward: 50,
    difficulty: "easy",
    category: "Password Security",
    documentation:
      "Learn how to create strong, unique passwords and the benefits of using a password manager. Focus on length, complexity, and avoiding personal information.",
    videoUrl: "https://www.youtube.com/embed/pcIK4y_Qf3Q", // Example YouTube embed
    imageUrl: "/img/password-security.png", // Placeholder image
    miniTaskDescription: "Describe three characteristics of a strong password.",
    game: "/games/password-challenge.html", // Placeholder game
  },
  {
    id: "task-2",
    title: "Enable Two-Factor Authentication (2FA)",
    description:
      "Understand the importance of 2FA and how to enable it on your accounts.",
    experienceReward: 75,
    difficulty: "medium",
    category: "Account Security",
    documentation:
      "Two-factor authentication (2FA) adds an extra layer of security. Learn about different types of 2FA (SMS, authenticator apps, hardware keys) and why it's crucial.",
    videoUrl: "https://www.youtube.com/embed/0Gv0h_v7b-g",
    imageUrl: "/img/2fa-security.png",
    miniTaskDescription: "List two benefits of using 2FA.",
    game: "/games/2fa-quiz.html",
  },
  {
    id: "task-3",
    title: "Identify Phishing Attempts",
    description:
      "Learn to recognize common phishing tactics and protect yourself from social engineering.",
    experienceReward: 100,
    difficulty: "medium",
    category: "Phishing Awareness",
    documentation:
      "Phishing attacks try to trick you into revealing sensitive information. Learn to spot red flags in emails, messages, and websites, and what to do if you suspect a phishing attempt.",
    videoUrl: "https://www.youtube.com/embed/K7yK2E5Qk4o",
    imageUrl: "/img/phishing-awareness.png",
    miniTaskDescription: "Identify one common sign of a phishing email.",
    game: "/games/phishing-game.html",
  },
  {
    id: "task-4",
    title: "Update Your Software",
    description:
      "Understand why keeping your operating system and applications updated is crucial for security.",
    experienceReward: 60,
    difficulty: "easy",
    category: "System Security",
    documentation:
      "Software updates often include security patches that fix vulnerabilities. Learn why prompt updates are essential for protecting your devices from known threats.",
    videoUrl: "https://www.youtube.com/embed/wXw-FkR08s0",
    imageUrl: "/img/software-update.png",
    miniTaskDescription: "Why are software updates important for security?",
    game: "/games/update-quiz.html",
  },
  {
    id: "task-5",
    title: "Backup Your Data",
    description:
      "Discover best practices for backing up your important data to prevent loss.",
    experienceReward: 80,
    difficulty: "medium",
    category: "Data Protection",
    documentation:
      "Regular data backups are critical for disaster recovery. Learn about different backup strategies (local, cloud) and what kind of data you should prioritize.",
    videoUrl: "https://www.youtube.com/embed/Y0J4Y64xV1o",
    imageUrl: "/img/data-backup.png",
    miniTaskDescription: "Name two places where you can back up your data.",
    game: "/games/backup-scenario.html",
  },
  {
    id: "task-6",
    title: "Use a VPN",
    description:
      "Learn how a Virtual Private Network (VPN) protects your online privacy and security.",
    experienceReward: 120,
    difficulty: "hard",
    category: "Network Security",
    documentation:
      "A VPN encrypts your internet connection and masks your IP address, enhancing privacy and security, especially on public Wi-Fi. Understand how VPNs work and their benefits.",
    videoUrl: "https://www.youtube.com/embed/W_g9vA-t-Ts",
    imageUrl: "/img/vpn-security.png",
    miniTaskDescription: "How does a VPN protect your online privacy?",
    game: "/games/vpn-use-case.html",
  },
  {
    id: "task-7",
    title: "Secure Your Wi-Fi Network",
    description:
      "Steps to secure your home Wi-Fi network and prevent unauthorized access.",
    experienceReward: 90,
    difficulty: "medium",
    category: "Network Security",
    documentation:
      "Securing your Wi-Fi network prevents unauthorized access and potential cyber threats. Learn about strong passwords, encryption (WPA3), and disabling WPS.",
    videoUrl: "https://www.youtube.com/embed/KjLwW4qG73M",
    imageUrl: "/img/wifi-security.png",
    miniTaskDescription:
      "What is one step you can take to secure your home Wi-Fi network?",
    game: "/games/wifi-config-game.html",
  },
];

class LearningTask {
  getAllTasks() {
    return learningTasks;
  }

  getTaskById(id) {
    return learningTasks.find((task) => task.id === id);
  }
}

module.exports = new LearningTask();
