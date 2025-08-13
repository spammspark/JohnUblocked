import GameCard from "./game/GameCard";

interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating?: number;
  category?: string;
}

interface GameSectionProps {
  title: string;
  games: Game[];
  showSeeAll?: boolean;
}

export default function GameSection({ title, games, showSeeAll = true }: GameSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        {showSeeAll && (
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            See All
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
            rating={game.rating}
            category={game.category}
          />
        ))}
      </div>
    </section>
  );
}
