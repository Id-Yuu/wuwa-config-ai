import { type ResultsDisplayProps } from '../types';
import IniDisplay from './partials/IniDisplay';
import Recommendations from './partials/Recommendations';
import { useResultDisplay } from '../hooks/useResultDisplay';

export default function ResultDisplay({ results }: ResultsDisplayProps) {
  const {
    recommendations,
    iniContent,
    downloadIniFile,
    copyToClipboard,
  } = useResultDisplay(results);

  return (
    <div className="space-y-6">
      <Recommendations recommendations={recommendations} />

      {iniContent && (
        <IniDisplay
          iniContent={iniContent}
          onCopy={copyToClipboard}
          onDownload={downloadIniFile}
        />
      )}
    </div>
  );
}