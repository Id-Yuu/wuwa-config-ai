import { Download, FileText, Settings } from 'lucide-react';

interface ResultsDisplayProps {
  results: string;
}

export default function ResultDisplay({ results }: ResultsDisplayProps) {
  const parseResults = (text: string) => {
    const iniMatch = text.match(/\[[\s\S]*?\][\s\S]*$/);

    if (iniMatch) {
      const iniStartIndex = text.indexOf(iniMatch[0]);
      const recommendations = text.substring(0, iniStartIndex).trim();
      const iniContent = text.substring(iniStartIndex).trim();

      return { recommendations, iniContent };
    }

    return { recommendations: text, iniContent: '' };
  };

  const { recommendations, iniContent } = parseResults(results);

  const formatRecommendations = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const content = part.slice(2, -2);
        return <strong key={index} className="font-semibold text-gray-900">{content}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const downloadIniFile = () => {
    const blob = new Blob([iniContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Engine.ini';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iniContent);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">Recommendations</h2>
        </div>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          <div className="whitespace-pre-wrap">{formatRecommendations(recommendations)}</div>
        </div>
      </div>

      {iniContent && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold text-white">Engine.ini Configuration</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors text-sm"
              >
                Copy
              </button>
              <button
                onClick={downloadIniFile}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
          <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono leading-relaxed">
              {iniContent}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
