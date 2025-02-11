"use client";

import { useState, useEffect } from "react";
import "../app/globals.css"; // Import the global CSS file
import Link from "next/link";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    // Handle password reset logic here
    setMessage("Password has been reset successfully.");
  };

  return (
    <div className={`flex min-h-screen font-[family-name:var(--font-geist-sans)] bg-cover bg-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ backgroundImage: "url('/bgIMG.jpg')" }}>
      <div className="bg-white shadow-lg w-full max-w-4xl min-h-screen p-8 flex flex-col">
        {/* Header */}
        <header className="w-full text-center py-4 bg-gray-800 text-white rounded-t-lg">
          <h1 className="text-4xl font-bold text-white">Reset Password</h1>
        </header>
        
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center gap-8 mt-8 flex-grow">
          <div className={`w-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {message && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 text-center" role="alert">
                <span className="block sm:inline">{message}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-4 mx-auto">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                required
              />
              <button type="submit" className="px-4 py-2 mb-4 bg-gray-800 text-white rounded-full hover:bg-gray-900">
                Reset Password
              </button>
              <Link href="/auth" legacyBehavior>
                <a className="block text-center text-gray-800 hover:underline cursor-pointer">
                  Back to Login
                </a>
              </Link>
            </form>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="w-full text-center py-4 bg-gray-800 text-white rounded-b-lg mt-auto">
          <p>&copy; 2025. In development.</p>
        </footer>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}
