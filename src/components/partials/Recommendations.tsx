import { Settings } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface RecommendationsProps {
  recommendations: string;
}

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recommendations</h2>
      </div>
      <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed overflow-y-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {recommendations}
        </ReactMarkdown>
      </div>
    </div>
  );
}