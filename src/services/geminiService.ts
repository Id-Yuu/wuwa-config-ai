import { GoogleGenerativeAI } from '@google/generative-ai';
import { recommendationPrompt } from '../data/promptGemini';

export async function getGeminiRecommendation(apiKey: string, specifications: string): Promise<string> {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const prompt = recommendationPrompt.replace('{specifications}', specifications);

  const result = await model.generateContent(prompt);
  const response = result.response;
  return response.text();
}

export async function checkGeminiKey(apiKey: string): Promise<boolean> {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent('ping');
    return !!result.response.text();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}