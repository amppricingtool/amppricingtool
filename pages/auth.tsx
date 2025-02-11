"use client";

import { useState, useEffect } from "react";
import "../app/globals.css"; // Import the global CSS file
import Link from "next/link";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState("login"); // "login", "createAccount", "forgotPassword"
  const [transition, setTransition] = useState(false);
  const [message, setMessage] = useState("");

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
      setMessage(`A password reset email has been sent to ${email}`);
    } else {
      setMessage("Failed to send reset email. Please try again.");
    }
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      return;
    }
    if (!/\d/.test(password)) {
      setMessage("Password must contain at least one number.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setMessage("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setMessage("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setMessage("Password must contain at least one special character.");
      return;
    }
    // Handle account creation logic here
    setMessage("Account created successfully.");
  };

  return (
    <div className={`flex min-h-screen font-[family-name:var(--font-geist-sans)] bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ backgroundImage: "url('/bgIMG.jpg')" }}>
      <div className="bg-white shadow-lg w-full max-w-4xl min-h-screen p-8 flex flex-col">
        {/* Header */}
        <header className="w-full text-center py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-t-lg">
          <h1 className="text-4xl font-bold text-white">
            {view === "login" && "Login"}
            {view === "createAccount" && "Create Account"}
            {view === "forgotPassword" && "Forgot Password"}
          </h1>
        </header>
        
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center gap-8 mt-8 flex-grow">
          <div className={`w-full transition-opacity duration-300 ${transition ? 'opacity-0' : 'opacity-100'}`}>
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 text-center" role="alert">
                <span className="block sm:inline">{message}</span>
              </div>
            )}
            {view === "login" && (
              <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-4 mx-auto">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <button type="submit" className="px-4 py-2 mb-4 bg-gray-800 text-white rounded-full hover:bg-gray-900">
                  Login
                </button>
                <a onClick={() => handleViewChange("forgotPassword")} className="block text-center text-gray-800 hover:underline cursor-pointer">
                  Forgot Password?
                </a>
                <a onClick={() => handleViewChange("createAccount")} className="block text-center text-gray-800 hover:underline cursor-pointer">
                  Create Account
                </a>
              </form>
            )}
            {view === "createAccount" && (
              <form onSubmit={handleCreateAccountSubmit} className="w-full max-w-xs flex flex-col gap-4 mx-auto">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <button type="submit" className="px-4 py-2 mb-4 bg-gray-800 text-white rounded-full hover:bg-gray-900">
                  Create Account
                </button>
                <a onClick={() => handleViewChange("login")} className="block text-center text-gray-800 hover:underline cursor-pointer">
                  Already have an account? Login
                </a>
              </form>
            )}
            {view === "forgotPassword" && (
              <form onSubmit={handleForgotPasswordSubmit} className="w-full max-w-xs flex flex-col gap-4 mx-auto">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800"
                  required
                />
                <button type="submit" className="px-4 py-2 mb-4 bg-gray-800 text-white rounded-full hover:bg-gray-900">
                  Reset Password
                </button>
                <a onClick={() => handleViewChange("login")} className="block text-center text-gray-800 hover:underline cursor-pointer">
                  Back to Login
                </a>
              </form>
            )}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="w-full text-center py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-b-lg mt-auto">
          <p>&copy; 2025 Pricing Tool. All rights reserved.</p>
        </footer>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}
