import { Settings } from 'lucide-react';

interface RecommendationsProps {
  recommendations: string;
}

export default function Recommendations({ recommendations }: RecommendationsProps) {
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

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Recommendations</h2>
      </div>
      <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
        <div className="whitespace-pre-wrap">{formatRecommendations(recommendations)}</div>
      </div>
    </div>
  );
}
