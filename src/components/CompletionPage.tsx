import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

export function CompletionPage() {
  const handleReturnToSurvey = () => {
    // Replace this URL with your actual Qualtrics survey URL
    window.location.href = 'YOUR_QUALTRICS_SURVEY_URL_HERE';
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        <h1 className="mb-6">Thank You for Your Participation</h1>
        <p className="mb-8 text-gray-600">
          You have completed the conversation task. Please click the button below 
          to return to the survey and continue with the study.
        </p>
        <Button 
          onClick={handleReturnToSurvey}
          size="lg"
          className="px-8"
        >
          Return to Survey
        </Button>
      </div>
    </div>
  );
}
