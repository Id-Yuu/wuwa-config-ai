export async function getOpenAIRecommendation(apiKey: string, specifications: string): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a gaming optimization expert specializing in mobile game configuration for Wuthering Waves.'
        },
        {
          role: 'user',
          content: `Based on these smartphone specifications, recommend optimal graphics settings for Wuthering Waves game and provide the recommended .ini configuration file content.

Smartphone Specifications:
${specifications}

Please provide:
1. Recommended graphics settings (brief explanation)
2. Higher performance tweak options
3. Complete .ini file configuration with optimized engine settings

Format the .ini configuration clearly with sections and comments.`
        }
      ],
      temperature: 0.7
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function checkOpenAIKey(apiKey: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    return response.ok;
  } catch {
    return false;
  }
}
