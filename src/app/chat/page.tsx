import Header from "@/components/Header";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-6xl mb-4">💬</div>
          <h1 className="text-4xl font-bold text-white mb-4">Chat</h1>
          <p className="text-gray-300 text-lg mb-8">
            Connect with other players and discuss your favorite games!
          </p>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="text-orange-500 font-medium">
              Chat feature coming soon!
            </div>
            <p className="text-gray-400 mt-2">
              We're working on bringing you an awesome chat experience.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Unblocked Games. All rights reserved. Play responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
