import type { FC, FormEvent } from 'react';
import { Key } from 'lucide-react';
import type { AIModel } from '../types';

interface ApiConfigurationProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  selectedModel: AIModel;
  setSelectedModel: (model: AIModel) => void;
  handleApiKeySubmit: (e: FormEvent) => void;
  isCheckingKey: boolean;
  error: string;
}

const ApiConfiguration: FC<ApiConfigurationProps> = ({
  apiKey,
  setApiKey,
  selectedModel,
  setSelectedModel,
  handleApiKeySubmit,
  isCheckingKey,
  error,
}) => {
  return (
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
              <span className="text-gray-700">Gemini 2.5 Flash</span>
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
  );
};

export default ApiConfiguration;
