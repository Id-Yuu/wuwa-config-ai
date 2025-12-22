import { type InputFieldProps } from '../../types';

export default function InputField({ name, label, value, onChange, placeholder, colSpan = 'md:col-span-1' }: InputFieldProps) {
  return (
    <div className={colSpan}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        required
      />
    </div>
  );
}
