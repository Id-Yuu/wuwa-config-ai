import { FileText, Download } from 'lucide-react';

interface IniDisplayProps {
  iniContent: string;
  onCopy: () => void;
  onDownload: () => void;
}

export default function IniDisplay({ iniContent, onCopy, onDownload }: IniDisplayProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-green-400" />
          <h2 className="text-lg sm:text-xl font-semibold text-white">Engine.ini Configuration</h2>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={onCopy}
            className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors text-sm w-full sm:w-auto"
          >
            Copy
          </button>
          <button
            onClick={onDownload}
            className="flex flex-1 sm:flex-none items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm w-full sm:w-auto"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
      <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
        <pre className="text-xs sm:text-sm text-green-400 font-mono leading-relaxed">
          {iniContent}
        </pre>
      </div>
    </div>
  );
}
