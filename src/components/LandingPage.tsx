import { Button } from './ui/button';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-5xl">Research Study: Human-AI Conversation</h1>
        <p className="mb-8 text-gray-600">
          Thank you for participating in our research study. You will engage in a conversation 
          with an AI chatbot. Please interact naturally and complete the conversation task.
        </p>
        <Button 
          onClick={onStart}
          size="lg"
          className="bg-blue-600 px-8 hover:bg-blue-700"
        >
          Begin Conversation
        </Button>
      </div>
    </div>
  );
}