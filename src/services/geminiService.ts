import { GoogleGenerativeAI } from '@google/generative-ai';

export async function getGeminiRecommendation(apiKey: string, specifications: string): Promise<string> {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

  const prompt = `Based on these smartphone specifications, recommend optimal graphics settings for Wuthering Waves game and provide the recommended .ini configuration file content.

Smartphone Specifications:
${specifications}

Please provide:
1. Recommended graphics settings (brief explanation)
2. Higher performance tweak options
3. Complete .ini file configuration with optimized engine settings

Format the .ini configuration clearly with sections and comments.`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}

// lupa booking api key le
export async function checkGeminiKey(apiKey: string): Promise<boolean> {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
    const result = await model.generateContent('ping');
    return !!result.response.text();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}
