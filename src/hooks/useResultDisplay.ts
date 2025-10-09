import { useMemo } from 'react';

export function useResultDisplay(results: string) {
  const parseResults = (text: string) => {
    const iniMatch = text.match(/```ini\n([\s\S]*?)```/);

    if (iniMatch && iniMatch[1]) {
      const iniContent = iniMatch[1].trim();
      const recommendations = text.substring(0, iniMatch.index).trim();
      return { recommendations, iniContent };
    }

    return { recommendations: text, iniContent: '' };
  };

  const { recommendations, iniContent } = useMemo(() => parseResults(results), [results]);

  const downloadIniFile = () => {
    const blob = new Blob([iniContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Engine & DeviceProfiles.ini';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iniContent);
  };

  return {
    recommendations,
    iniContent,
    downloadIniFile,
    copyToClipboard,
  };
}
