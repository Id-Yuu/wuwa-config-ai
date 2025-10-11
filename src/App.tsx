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
