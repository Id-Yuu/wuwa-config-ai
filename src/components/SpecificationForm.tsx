import { useState } from 'react';
import { Smartphone } from 'lucide-react';

interface SpecificationFormProps {
  onSubmit: (specifications: string) => void;
  isLoading: boolean;
}

export default function SpecificationForm({ onSubmit, isLoading }: SpecificationFormProps) {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    chipset: '',
    gpu: '',
    ram: '',
    storage: '',
    screenResolution: '',
    refreshRate: '',
    android: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const specifications = `
Brand: ${formData.brand}
Model: ${formData.model}
Chipset: ${formData.chipset}
GPU: ${formData.gpu}
RAM: ${formData.ram}
Storage: ${formData.storage}
Screen Resolution: ${formData.screenResolution}
Refresh Rate: ${formData.refreshRate}
Android Version: ${formData.android}
    `.trim();
    onSubmit(specifications);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Smartphone className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Smartphone Specifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="e.g., Samsung, Xiaomi"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="e.g., Galaxy S23, Poco F5"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Chipset</label>
          <input
            type="text"
            name="chipset"
            value={formData.chipset}
            onChange={handleChange}
            placeholder="e.g., Snapdragon 8 Gen 2"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">GPU</label>
          <input
            type="text"
            name="gpu"
            value={formData.gpu}
            onChange={handleChange}
            placeholder="e.g., Adreno 740"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">RAM</label>
          <input
            type="text"
            name="ram"
            value={formData.ram}
            onChange={handleChange}
            placeholder="e.g., 8GB, 12GB"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Storage</label>
          <input
            type="text"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
            placeholder="e.g., 256GB"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Screen Resolution</label>
          <input
            type="text"
            name="screenResolution"
            value={formData.screenResolution}
            onChange={handleChange}
            placeholder="e.g., 1080x2400, 1440x3200"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Refresh Rate</label>
          <input
            type="text"
            name="refreshRate"
            value={formData.refreshRate}
            onChange={handleChange}
            placeholder="e.g., 120Hz, 90Hz"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Android Version</label>
          <input
            type="text"
            name="android"
            value={formData.android}
            onChange={handleChange}
            placeholder="e.g., Android 13, Android 14"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
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
