"use client";

import { useState, useEffect } from "react";
import "../app/globals.css"; // Import the global CSS file
import Link from "next/link";
import styles from "./ResetPassword.module.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessageType("error");
      setMessage("Passwords do not match.");
      return;
    }
    // Handle password reset logic here
    setMessageType("success");
    setMessage("Password has been reset successfully.");
  };

  return (
    <div className={`${styles.container} ${styles.bgImage} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.card}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>Reset Password</h1>
        </header>
        
        {/* Main Content */}
        <main className={styles.mainContent}>
          <div className={`${styles.transition} ${isVisible ? styles.visible : styles.hidden}`}>
            {message && (
              <div className={`${styles.message} ${messageType === "error" ? styles.error : styles.success}`} role="alert">
                <span>{message}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                Reset Password
              </button>
              <Link href="/auth" legacyBehavior>
                <a className={styles.link}>
                  Back to Login
                </a>
              </Link>
            </form>
          </div>
        </main>
        
        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2025. In development.</p>
        </footer>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}
