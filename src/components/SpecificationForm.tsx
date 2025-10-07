import { Smartphone } from 'lucide-react';
import { useSpecificationForm } from '../hooks/useSpecificationForm';
import { formFields } from '../data/formFields';
import InputField from './partials/InputField';

interface SpecificationFormProps {
  onSubmit: (specifications: string) => void;
  isLoading: boolean;
}

export default function SpecificationForm({ onSubmit, isLoading }: SpecificationFormProps) {
  const { formData, handleChange, handleSubmit } = useSpecificationForm(onSubmit);

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
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Analyzing...' : 'Get Recommendations'}
      </button>
    </form>
  );
}