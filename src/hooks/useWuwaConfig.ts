import { useState } from 'react';
import type { FormEvent } from 'react';
import type { AIModel } from '../types';
import { getGeminiRecommendation, checkGeminiKey } from '../services/geminiService';
import { getOpenAIRecommendation, checkOpenAIKey } from '../services/openaiService';

export const useWuwaConfig = () => {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState<AIModel>('gemini');
  const [isConfigured, setIsConfigured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState('');
  const [error, setError] = useState('');
  const [isCheckingKey, setIsCheckingKey] = useState(false);

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

  const handleApiKeySubmit = async (e: FormEvent) => {
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

  return {
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
  };
};
