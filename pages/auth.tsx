"use client";

import { useState, useEffect } from "react";
import "../app/globals.css"; // Import the global CSS file
import Link from "next/link";
import styles from "./Auth.module.css";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState("login"); // "login", "createAccount", "forgotPassword"
  const [transition, setTransition] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewChange = (newView: string) => {
    setTransition(true);
    setTimeout(() => {
      setView(newView);
      setTransition(false);
      setMessage(""); // Clear message on view change
    }, 300); // Duration of the transition
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendResetEmail(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const sendResetEmail = async (email: string) => {
    const response = await fetch("/api/send-reset-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      setMessageType("success");
      setMessage(`A password reset email has been sent to ${email}`);
    } else {
      setMessageType("error");
      setMessage("Failed to send reset email. Please try again.");
    }
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setMessageType("error");
      setMessage("Password must be at least 8 characters long.");
      return;
    }
    if (!/\d/.test(password)) {
      setMessageType("error");
      setMessage("Password must contain at least one number.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setMessageType("error");
      setMessage("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setMessageType("error");
      setMessage("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setMessageType("error");
      setMessage("Password must contain at least one special character.");
      return;
    }
    // Handle account creation logic here
    setMessageType("success");
    setMessage("Account created successfully.");
  };

  return (
    <div className={`${styles.container} ${styles.bgImage} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.card}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>
            {view === "login" && "Login"}
            {view === "createAccount" && "Create Account"}
            {view === "forgotPassword" && "Forgot Password"}
          </h1>
        </header>
        
        {/* Main Content */}
        <main className={styles.mainContent}>
          <div className={`${styles.transition} ${transition ? styles.hidden : styles.visible}`}>
            {message && (
              <div className={`${styles.message} ${messageType === "error" ? styles.error : styles.success}`} role="alert">
                <span>{message}</span>
              </div>
            )}
            {view === "login" && (
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.button}>
                  Login
                </button>
                <a onClick={() => handleViewChange("forgotPassword")} className={styles.link}>
                  Forgot Password?
                </a>
                <a onClick={() => handleViewChange("createAccount")} className={styles.link}>
                  Create Account
                </a>
              </form>
            )}
            {view === "createAccount" && (
              <form onSubmit={handleCreateAccountSubmit} className={styles.form}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <div className={styles.passwordInfo}>
                  <p>Password must contain:</p>
                  <ul>
                    <li>At least 8 characters</li>
                    <li>At least one number</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one special character (!@#$%^&*)</li>
                  </ul>
                </div>
                <button type="submit" className={styles.button}>
                  Create Account
                </button>
                <a onClick={() => handleViewChange("login")} className={styles.link}>
                  Already have an account? Login
                </a>
              </form>
            )}
            {view === "forgotPassword" && (
              <form onSubmit={handleForgotPasswordSubmit} className={styles.form}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.button}>
                  Reset Password
                </button>
                <a onClick={() => handleViewChange("login")} className={styles.link}>
                  Back to Login
                </a>
              </form>
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2025 Pricing Tool. All rights reserved.</p>
        </footer>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}
