"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import GameLauncher from "@/components/game/GameLauncher";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const gameId = params.gameId as string;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <button
            onClick={() => router.push("/games")}
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Games</span>
          </button>
        </div>

        <GameLauncher gameId={gameId} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Unblocked Games. All rights reserved. Play responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
