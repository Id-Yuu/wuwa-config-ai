import { Settings } from 'lucide-react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { remarkCustomStyling } from '../../utils/remarkPlugins';
import { type RecommendationsProps } from '../../types';

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Recommendations</h2>
      </div>
      <div className="text-sm sm:text-base max-w-none text-gray-700 leading-relaxed overflow-y-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkCustomStyling]}>
          {recommendations}
        </ReactMarkdown>
      </div>
    </div>
  );
}