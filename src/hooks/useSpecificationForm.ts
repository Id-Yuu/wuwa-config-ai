import { useState } from 'react';
import { type FormData } from '../types';

export const useSpecificationForm = (onSubmit: (specifications: string) => void) => {
  const [formData, setFormData] = useState<FormData>({
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

  return { formData, handleChange, handleSubmit };
};