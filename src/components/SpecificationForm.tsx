import { Smartphone } from 'lucide-react';
import { useSpecificationForm } from '../hooks/useSpecificationForm';
import { formFields } from '../data/formFields';
import InputField from './partials/InputField';
import { useState } from 'react';
import { recommendationPrompt } from '../data/promptGemini';

interface SpecificationFormProps {
  onSubmit: (specifications: string) => void;
  isLoading: boolean;
}

export default function SpecificationForm({ onSubmit, isLoading }: SpecificationFormProps) {
  const [prompt, setPrompt] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  const handleFormSubmit = (specifications: string) => {
    const generatedPrompt = recommendationPrompt.replace('{specifications}', specifications);
    setPrompt(generatedPrompt);
    setShowPrompt(true);
  };

  const { formData, handleChange, handleSubmit } = useSpecificationForm(handleFormSubmit);

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  if (showPrompt) {
    return (
      <form onSubmit={handlePromptSubmit} className="space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Review and Edit Prompt</h2>
        </div>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-48 p-2 border rounded-md bg-gray-50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Analyzing...' : 'Get Recommendations'}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Smartphone className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Smartphone Specifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formFields.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            label={field.label}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field.placeholder}
            colSpan={field.colSpan}
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Generate Prompt
      </button>
    </form>
  );
}