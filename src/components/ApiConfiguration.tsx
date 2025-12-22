import type { FC } from 'react';
import { Key } from 'lucide-react';
import type { AIModel, ApiConfigurationProps } from '../types';

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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors">
      <form onSubmit={handleApiKeySubmit} className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <Key className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">API Configuration</h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
              <span className="text-gray-700 dark:text-gray-300">Gemini 2.5 Flash</span>
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
              <span className="text-gray-700 dark:text-gray-300">OpenAI GPT-4</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={`Enter your ${selectedModel === 'gemini' ? 'Google AI' : 'OpenAI'} API key`}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            minLength={39}
            required
            disabled={isCheckingKey}
          />
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Your API key is stored locally and never sent to our servers
          </p>
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors ${apiKey.trim().length < 39 || isCheckingKey ? 'opacity-60 cursor-not-allowed' : ''}`}
          disabled={apiKey.trim().length < 39 || isCheckingKey}
        >
          {isCheckingKey ? 'Checking Key...' : 'Continue'}
        </button>
        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-2 rounded-lg mt-3 transition-colors">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default ApiConfiguration;
