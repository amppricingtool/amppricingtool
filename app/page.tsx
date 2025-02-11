import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center text-gray-800" 
          style={{ backgroundImage: "url('/bgIMG.jpg')" }}>
      {/* Header */}
      <header className="w-full text-center py-8">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg shadow-black">Welcome to Pricing Tool</h1>
        <p className="text-xl text-white mt-4 drop-shadow-lg shadow-black">The definitive solution for pricing our products and services</p>
      </header>
      
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center gap-8 mt-8 w-full max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <p className="text-lg text-center max-w-prose">
          The pricing tool helps you to easily and accurately price our products and services. Get started now by accessing the login page.
        </p>
        <Link href="/auth" legacyBehavior>
          <a className="px-8 py-4 mt-4 bg-gray-800 text-white rounded-full hover:bg-gray-900">
            Go to Login
          </a>
        </Link>
      </main>
      
      {/* Features Section */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-white drop-shadow-lg shadow-black">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Easy to Use</h3>
            <p>Our tool is designed with simplicity in mind, making it easy for anyone to use.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Accurate Pricing</h3>
            <p>Get accurate pricing for all our products and services with just a few clicks.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Real-time Updates</h3>
            <p>Stay up-to-date with real-time pricing updates and changes.</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full text-center py-8 mt-16 bg-gray-800 text-white rounded-lg">
        <p>&copy; 2025 Pricing Tool. All rights reserved.</p>
      </footer>
    </div>
  );
}
