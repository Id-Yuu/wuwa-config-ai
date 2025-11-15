import { Sparkles } from 'lucide-react';
import ResultDisplay from './components/ResultDisplay';
import ApiConfiguration from './components/ApiConfiguration';
import SpecificationForm from './components/SpecificationForm';
import { useWuwaConfig } from './hooks/useWuwaConfig';

function App() {
  const {
    apiKey,
    setApiKey,
    selectedModel,
    setSelectedModel,
    isConfigured,
    isLoading,
    results,
    error,
    isCheckingKey,
    handleApiKeySubmit,
    handleSpecificationSubmit,
    resetConfiguration,
  } = useWuwaConfig();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Wuthering Waves Config</h1>
          </div>
          <p className="text-gray-600">AI-powered graphics configuration optimizer</p>
          <a href="https://www.paypal.com/paypalme/arleth98" target="_blank" class="flex items-center justify-center mt-3" title="Support via PayPal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.028.15a.805.805 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.459A.95.95 0 0 1 6.607 2h5.976c2.013 0 3.38.405 4.524 1.388z"></path>
            </svg> 
            Support Via Paypal
          </a>
        </div>

        {!isConfigured ? (
          <ApiConfiguration
            apiKey={apiKey}
            setApiKey={setApiKey}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            handleApiKeySubmit={handleApiKeySubmit}
            isCheckingKey={isCheckingKey}
            error={error}
          />
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <SpecificationForm onSubmit={handleSpecificationSubmit} isLoading={isLoading} />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
                <p className="font-medium">Error:</p>
                <p className="text-sm">{error}</p>
              </div>
            )}

            {results && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <ResultDisplay results={results} />
              </div>
            )}

            <button
              onClick={resetConfiguration}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Change API Key
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
