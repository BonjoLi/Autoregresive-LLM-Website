import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ChatInterface } from './components/ChatInterface';
import { CompletionPage } from './components/CompletionPage';

type Page = 'landing' | 'chat' | 'completion';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'landing' && (
        <LandingPage onStart={() => setCurrentPage('chat')} />
      )}
      {currentPage === 'chat' && (
        <ChatInterface onComplete={() => setCurrentPage('completion')} />
      )}
      {currentPage === 'completion' && (
        <CompletionPage />
      )}
    </div>
  );
}
