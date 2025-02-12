"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div className={`${styles.container} ${styles.bgImage}`}>
      {/* Loading Card */}
      {isLoading && (
        <div className={styles.loadingCard}>
          <p className="text-gray-800">Loading, please wait...</p>
        </div>
      )}

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Pricing Tool</h1>
        <p className={styles.subtitle}>The definitive solution for pricing our products and services</p>
      </header>
      
      {/* Main Content */}
      <main className={styles.mainContent}>
        <p className={styles.description}>
          The pricing tool helps you to easily and accurately price our products and services. Get started now by accessing the login page.
        </p>
        <Link href="/auth" legacyBehavior>
          <a
            className={`${styles.loginButton} ${isLoading ? styles.loading : ""}`}
            onClick={handleClick}
          >
            Go to Login
          </a>
        </Link>
      </main>
      
      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Easy to Use</h3>
            <p>Our tool is designed with simplicity in mind, making it easy for anyone to use.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Accurate Pricing</h3>
            <p>Get accurate pricing for all our products and services with just a few clicks.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Real-time Updates</h3>
            <p>Stay up-to-date with real-time pricing updates and changes.</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2025 Pricing Tool. All rights reserved.</p>
      </footer>
    </div>
  );
}
