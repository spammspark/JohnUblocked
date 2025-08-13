"use client";

import Header from "@/components/Header";
import GameSection from "@/components/GameSection";

const featuredGames = [
  {
    id: "curve-rush",
    title: "Curve Rush",
    description: "Fast-paced, minimalist arcade challenge",
    imageUrl: "https://placehold.co/400x300?text=Fast+paced+minimalist+arcade+game+curve+rush",
    rating: 94,
    category: "Arcade"
  },
  {
    id: "snake",
    title: "Snake Game",
    description: "Classic snake game with modern graphics",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00afaf6a-af42-495a-b96c-7b1c00543005.png",
    rating: 95,
    category: "Arcade"
  },
  {
    id: "tetris",
    title: "Tetris",
    description: "The legendary puzzle game",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b1b2a4d8-084a-4e77-8e7b-c9cd902a2ee0.png",
    rating: 98,
    category: "Puzzle"
  },
  {
    id: "slope-embed",
    title: "Slope",
    description: "High-speed slope game with streamlined controls",
    imageUrl: "https://placehold.co/400x300?text=High-speed+slope+game+with+streamlined+controls",
    rating: 92,
    category: "Arcade"
  }
];

const trendingGames = [
  {
    id: "italian-brainrot-clicker-2",
    title: "Italian Brainrot Clicker 2",
    description: "Quirky clicker game with endless fun",
    imageUrl: "https://placehold.co/400x300?text=Quirky+clicker+game+with+endless+fun+italian+brainrot+clicker+2",
    rating: 89,
    category: "Clicker"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    description: "Navigate through pipes",
    imageUrl: "https://placehold.co/400x300?text=Flappy+Bird+Side+Scrolling+Game",
    rating: 78,
    category: "Arcade"
  },
  {
    id: "2048",
    title: "2048",
    description: "Combine numbers to reach 2048",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15d6c8b4-1aab-41f8-8f4e-a4b0fe9c8901.png",
    rating: 88,
    category: "Puzzle"
  },
  {
    id: "space-invaders",
    title: "Space Invaders",
    description: "Defend Earth from alien invasion",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9b4120c2-1e19-4764-9b12-dc91fd4cdc5a.png",
    rating: 90,
    category: "Shooter"
  }
];

const multiplayerGames = [
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description: "Classic strategy game for two",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e9bb97e-451f-4f87-81c5-01a32782026c.png",
    rating: 75,
    category: "Strategy"
  },
  {
    id: "chess",
    title: "Chess",
    description: "The ultimate strategy game",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ef545229-7e9d-4631-a840-655e84238544.png",
    rating: 96,
    category: "Strategy"
  },
  {
    id: "checkers",
    title: "Checkers",
    description: "Classic board game",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc806a4e-5d7b-45ef-8e69-c86639f1d12f.png",
    rating: 80,
    category: "Strategy"
  },
  {
    id: "connect-four",
    title: "Connect Four",
    description: "Connect four in a row to win",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1711c00f-dd54-42b7-921b-c754e85102f2.png",
    rating: 85,
    category: "Strategy"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-orange-500">Ublockgames</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Play the best free games online on Ublockgames. No downloads, no restrictions, just pure gaming fun!
          </p>
          <div className="relative max-w-4xl mx-auto mb-8">
            <img
              src="https://placehold.co/1200x600?text=Ublockgames+Gaming+Hub+Modern+Dark+Theme+Landscape+Banner"
              alt="Ublockgames gaming hub with modern dark theme landscape banner showcasing various game elements"
              className="w-full h-auto rounded-lg shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1200x600?text=Gaming+Banner+Fallback";
              }}
            />
          </div>
        </section>

        {/* This Week's Picks */}
        <GameSection 
          title="This Week's Picks" 
          games={featuredGames}
        />

        {/* Trending */}
        <GameSection 
          title="Trending" 
          games={trendingGames}
        />

        {/* Multiplayer */}
        <GameSection 
          title="Multiplayer" 
          games={multiplayerGames}
        />

        {/* Advertisement Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Advertisement</h2>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Learn More
            </button>
          </div>
          <div className="mb-6">
            <img 
              src="https://placehold.co/800x400?text=Modern+Advertisement+banner+for+Ublockgames+with+sleek+dark+theme" 
              alt="Modern advertisement banner for Ublockgames with sleek dark theme design" 
              className="w-full h-auto rounded-lg shadow-md"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/800x400?text=Advertisement+image+fallback"; }}
            />
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <div className="text-gray-400 text-lg">
              Your ad could be here
            </div>
            <div className="text-gray-500 text-sm mt-2">
              Contact us for advertising opportunities
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Ublockgames. All rights reserved. Play responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
