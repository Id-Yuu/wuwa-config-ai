import type { Node } from 'unist';
import type { FormEvent } from 'react';

// services/*.ts
export type AIModel = 'gemini' | 'openai';

// hooks/useSpecificationForm.ts
export interface FormData {
  brand: string;
  model: string;
  chipset: string;
  gpu: string;
  ram: string;
  storage: string;
  screenResolution: string;
  refreshRate: string;
  android: string;
}

// data/formFields.ts
export interface FormField {
  name: keyof FormData;
  label: string;
  placeholder: string;
  colSpan?: string;
}

// utils/remarkPlugins.ts
export interface NodeWithData extends Node {
  depth?: number;
  data?: {
    hProperties?: {
      className?: string | string[];
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
}

// Props for components
export interface RecommendationsProps {
  recommendations: string;
}

export interface ApiConfigurationProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  selectedModel: AIModel;
  setSelectedModel: (model: AIModel) => void;
  handleApiKeySubmit: (e: FormEvent) => void;
  isCheckingKey: boolean;
  error: string;
}

export interface IniDisplayProps {
  iniContent: string;
  onCopy: () => void;
  onDownload: () => void;
}

export interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  colSpan?: string;
}

export interface ResultsDisplayProps {
  results: string;
}

export interface SpecificationFormProps {
  onSubmit: (specifications: string) => void;
  isLoading: boolean;
}