import { Settings } from 'lucide-react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { remarkCustomStyling } from '../../utils/remarkPlugins';
import { type RecommendationsProps } from '../../types';

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Recommendations</h2>
      </div>
      <div className="text-sm sm:text-base max-w-none text-gray-700 dark:text-gray-300 leading-relaxed overflow-y-auto transition-colors">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkCustomStyling]}>
          {recommendations}
        </ReactMarkdown>
      </div>
    </div>
  );
}