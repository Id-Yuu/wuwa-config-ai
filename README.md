# Wuwa Config AI
This repository is for obtaining recommended graphics configuration results for the game Wuthering Waves based on AI results. [For Mobile Version]

> Repository ini untuk mendapatkan hasil rekomendasi konfigurasi grafik untuk game Wuthering Waves berdasarkan hasil AI [Untuk smartphone]

## How to Use [Gemini API Key]
1. Create Project on `https://console.firebase.google.com/`
2. Create API Key on `https://aistudio.google.com/api-keys`
3. Import Project (cannot create, only import from firebase project)
4. Copy API KEY And Paste

## Run Locally

Clone the project

```bash
git clone https://github.com/Id-Yuu/wuwa-config-ai.git
```

Go to the project directory

```bash
cd wuwa-config-ai
```

Install dependencies

```bash
npm install

// if error use this command
npm i -f
```

Start the server

```bash
npm run dev
```


## Usage/Prompt

```js
// wuwa-config-ai/src/data/promptGemini.ts

export const recommendationPrompt = `
--> _Your_Prompt_
  
  {specifications}
  
--> _Your_Prompt_

  \`\`\`ini 
  ini

--> _Your_Command_Prompt_

  \`\`\` 
`
```

> **Note**: Every new patch update `_Your_Command_Prompt_` need to be update, following kuro command (`r.Kuro._this_config_`). But this is not important because u can review & editable while using this tools.
