"use client";

import Link from "next/link";

export default function GamesError({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }; 
  reset: () => void; 
}) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong!</h2>
          <p className="text-gray-300 mb-6">
            An error occurred while loading the games. Please try again.
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={reset}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
            
            <Link 
              href="/games"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Back to Games
            </Link>
            
            <Link 
              href="/"
              className="block text-orange-500 hover:text-orange-400 transition-colors"
            >
              Go Home
            </Link>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-6 text-left">
              <summary className="text-gray-400 cursor-pointer">Error Details</summary>
              <pre className="mt-2 text-xs text-red-400 bg-gray-900 p-2 rounded overflow-auto">
                {error.message}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
