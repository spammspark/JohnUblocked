import Header from "@/components/Header";
import GameSection from "@/components/GameSection";

const allGames = [
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
    id: "pong",
    title: "Pong",
    description: "Retro ping pong game",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/43f23ba1-dce4-4fc9-931d-dd8786e2c0fb.png",
    rating: 85,
    category: "Sports"
  },
  {
    id: "pacman",
    title: "Pac-Man",
    description: "Eat dots and avoid ghosts",
    imageUrl: "https://placehold.co/400x300?text=Pac+Man+Classic+Maze+Game",
    rating: 92,
    category: "Arcade"
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
  },
  {
    id: "breakout",
    title: "Breakout",
    description: "Break all the bricks",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4e9a6643-7ce3-46d4-9b81-02aba2ee895e.png",
    rating: 82,
    category: "Arcade"
  },
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
  },
  {
    id: "frogger",
    title: "Frogger",
    description: "Help the frog cross the road",
    imageUrl: "https://placehold.co/400x300?text=Frogger+Classic+Crossing+Game",
    rating: 87,
    category: "Arcade"
  },
  {
    id: "asteroids",
    title: "Asteroids",
    description: "Destroy asteroids in space",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e9669abf-410f-44d5-8d30-429434e74ea1.png",
    rating: 89,
    category: "Shooter"
  },
  {
    id: "centipede",
    title: "Centipede",
    description: "Shoot the centipede segments",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8b2ab421-4e7b-47f8-abe5-745e4c00195a.png",
    rating: 83,
    category: "Shooter"
  },
  {
    id: "missile-command",
    title: "Missile Command",
    description: "Defend your cities from missiles",
    imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73a2e366-0471-4d30-a170-d6c8f5561de9.png",
    rating: 86,
    category: "Strategy"
  }
];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">All Games</h1>
          <p className="text-gray-300 text-lg">
            Discover our complete collection of games on Ublockgames. Play instantly in your browser!
          </p>
        </div>

        {/* Filter/Search Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
          </div>
          <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500">
            <option value="">All Categories</option>
            <option value="arcade">Arcade</option>
            <option value="puzzle">Puzzle</option>
            <option value="strategy">Strategy</option>
            <option value="shooter">Shooter</option>
            <option value="sports">Sports</option>
          </select>
          <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500">
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest Rated</option>
            <option value="name">A-Z</option>
          </select>
        </div>

        <GameSection 
          title="All Games" 
          games={allGames}
          showSeeAll={false}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8">
          <p className="text-gray-400">
            © 2024 Ublockgames. All rights reserved. Play responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
