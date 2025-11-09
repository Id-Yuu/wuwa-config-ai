import { type FormField } from '../types';

export const formFields: FormField[] = [
  {
    name: 'brand',
    label: 'Brand',
    placeholder: 'e.g., Poco Hp tlol, Xiaomi',
    colSpan: 'md:col-span-1',
    type: 'text'
  },
  {
    name: 'model',
    label: 'Model',
    placeholder: 'e.g., Galaxy S23, Poco F6',
    colSpan: 'md:col-span-1',
    type: 'text'
  },
  {
    name: 'chipset',
    label: 'Chipset',
    placeholder: 'e.g., Snapdragon 8 Gen 2',
    colSpan: 'md:col-span-1',
    type: 'text'
  },
  {
    name: 'gpu',
    label: 'GPU',
    placeholder: 'e.g., Adreno 740',
    colSpan: 'md:col-span-1',
    type: 'text'
  },
  {
    name: 'ram',
    label: 'RAM',
    type: 'select',
    options: ['4GB', '6GB', '8GB', '12GB', '16GB'],
    colSpan: 'md:col-span-1'
  },
  {
    name: 'storage',
    label: 'Storage',
    type: 'select',
    options: ['64GB', '128GB', '256GB', '512GB', '1TB'],
    colSpan: 'md:col-span-1'
  },
  {
    name: 'screenResolution',
    label: 'Screen Resolution',
    type: 'select',
    options: ['720x1280', '1080x1920', '1080x2400', '1440x2560', '1440x3200'],
    colSpan: 'md:col-span-1'
  },
  {
    name: 'refreshRate',
    label: 'Refresh Rate',
    type: 'select',
    options: ['60Hz', '90Hz', '120Hz', '144Hz'],
    colSpan: 'md:col-span-1'
  },
  {
    name: 'android',
    label: 'Android Version',
    type: 'select',
    options: ['Android 10', 'Android 11', 'Android 12', 'Android 13', 'Android 14'],
    colSpan: 'md:col-span-2'
  }
];