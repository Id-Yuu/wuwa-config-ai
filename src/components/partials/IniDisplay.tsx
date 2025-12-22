import { FileText, Download } from 'lucide-react';
import { type IniDisplayProps } from '../../types';

export default function IniDisplay({ iniContent, onCopy, onDownload }: IniDisplayProps) {
  return (
    <div className="bg-gray-900 dark:bg-gray-950 border border-gray-700 dark:border-gray-800 rounded-xl p-4 sm:p-6 transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-green-400" />
          <h2 className="text-lg sm:text-xl font-semibold text-white">Engine.ini & DeviceProfiles.ini Configuration</h2>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={onCopy}
            className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-gray-700 dark:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors text-sm w-full sm:w-auto"
          >
            Copy
          </button>
          <button
            onClick={onDownload}
            className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-colors text-sm w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
      <div className="bg-gray-950 dark:bg-black rounded-lg p-4 overflow-x-auto transition-colors">
        <pre className="text-xs sm:text-sm text-green-400 font-mono leading-relaxed">
          {iniContent}
        </pre>
      </div>
    </div>
  );
}
