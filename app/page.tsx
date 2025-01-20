import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center" 
          style={{ backgroundImage: "url('/amBG.png')" }}>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        {/* Header */}
        <header className="w-full text-center py-4 bg-gray-800 text-white rounded-t-lg">
          <h1 className="text-4xl font-bold text-white">Welcome to Alvarez & Marsal Pricing Tool</h1>
        </header>
        
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center gap-8">
          <div className="pt-4">
            <Image src="/am.png" alt="A&M Logo" width={100} height={100} />
          </div>
          <p className="text-lg text-center max-w-prose text-gray-800">
            The new A&M Tool to help you price our products and services.
          </p>
          <button className="px-8 py-4 bg-gray-800 text-white rounded-full hover:bg-gray-900">
            Get Started
          </button>
          <div className="pb-4"></div>
        </main>
        
        {/* Footer */}
        <footer className="w-full text-center py-4 bg-gray-800 text-white rounded-b-lg">
          <p>&copy; 2025 Alvarez & Marsal. Developed by DTS Brazil. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
