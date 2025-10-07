import { useState } from 'react';
import { Key, Sparkles } from 'lucide-react';
import SpecificationForm from './components/SpecificationForm';
import ResultDisplay from './components/ResultDisplay';
import { getGeminiRecommendation, checkGeminiKey } from './services/geminiService';
import { getOpenAIRecommendation, checkOpenAIKey } from './services/openaiService';

type AIModel = 'gemini' | 'openai';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState<AIModel>('gemini');
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState('');
  const [error, setError] = useState('');
  const [isCheckingKey, setIsCheckingKey] = useState(false);

  // Cek booking api le
  const checkApiKeyConnectivity = async (key: string, model: AIModel) => {
    try {
      if (model === 'gemini') {
        return await checkGeminiKey(key);
      } else {
        return await checkOpenAIKey(key);
      }
    } catch {
      return false;
    }
  };

  const handleApiKeySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim().length < 39) {
      setError('API key must be at least 39 characters.');
      return;
    }
    setIsCheckingKey(true);
    setError('');
    const valid = await checkApiKeyConnectivity(apiKey, selectedModel);
    setIsCheckingKey(false);

    if (valid) {
      setIsConfigured(true);
      setError('');
    } else {
      setError('Unable to connect with the provided API key. Please check your API key and try again.');
    }
  };

  const handleSpecificationSubmit = async (specifications: string) => {
    setIsLoading(true);
    setError('');
    setResults('');
    try {
      let recommendation: string;
      if (selectedModel === 'gemini') {
        recommendation = await getGeminiRecommendation(apiKey, specifications);
      } else {
        recommendation = await getOpenAIRecommendation(apiKey, specifications);
      }
      setResults(recommendation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get recommendations. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetConfiguration = () => {
    setIsConfigured(false);
    setApiKey('');
    setResults('');
    setError('');
  };

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
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleApiKeySubmit} className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Key className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">API Configuration</h2>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select AI Model
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="model"
                      value="gemini"
                      checked={selectedModel === 'gemini'}
                      onChange={(e) => setSelectedModel(e.target.value as AIModel)}
                      className="w-4 h-4 text-blue-600"
                      disabled={isCheckingKey}
                    />
                    <span className="text-gray-700">Gemini 2.0 Flash</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="model"
                      value="openai"
                      checked={selectedModel === 'openai'}
                      onChange={(e) => setSelectedModel(e.target.value as AIModel)}
                      className="w-4 h-4 text-blue-600"
                      disabled={isCheckingKey}
                    />
                    <span className="text-gray-700">OpenAI GPT-4</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder={`Enter your ${selectedModel === 'gemini' ? 'Google AI' : 'OpenAI'} API key`}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  minLength={39}
                  required
                  disabled={isCheckingKey}
                />
                <p className="mt-2 text-xs text-gray-500">
                  Your API key is stored locally and never sent to our servers
                </p>
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors ${apiKey.trim().length < 39 || isCheckingKey ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={apiKey.trim().length < 39 || isCheckingKey}
              >
                {isCheckingKey ? 'Checking Key...' : 'Continue'}
              </button>
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg mt-3">
                  {error}
                </div>
              )}
            </form>
          </div>
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
