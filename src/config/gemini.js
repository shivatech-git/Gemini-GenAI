//const apiKey = "AIzaSyCoHStzA9rpmp7VqSVWh22D31GpWPdGPJw"

/*import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  const fs = fetch("node:fs");
  const mime = fetch("mime-types");
  
  const apiKey = process.env.AIzaSyCoHStzA9rpmp7VqSVWh22D31GpWPdGPJw;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro-exp-03-25",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "const {\n  GoogleGenerativeAI,\n  HarmCategory,\n  HarmBlockThreshold,\n} = require(\"@google/generative-ai\");\nconst fs = require(\"node:fs\");\nconst mime = require(\"mime-types\");\n\nconst apiKey = process.env.GEMINI_API_KEY;\nconst genAI = new GoogleGenerativeAI(apiKey);\n\nconvert this code to javascript\n\nconst model = genAI.getGenerativeModel({\n  model: \"gemini-1.5-pro\",\n});\n\nconst generationConfig = {\n  temperature: 1,\n  topP: 0.95,\n  topK: 40,\n  maxOutputTokens: 8192,\n  responseModalities: [\n  ],\n  responseMimeType: \"text/plain\",\n};\n\nasync function run() {\n  const chatSession = model.startChat({\n    generationConfig,\n    history: [\n    ],\n  });\n\n  const result = await chatSession.sendMessage(\"INSERT_INPUT_HERE\");\n  // TODO: Following code needs to be updated for client-side apps.\n  const candidates = result.response.candidates;\n  for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {\n    for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {\n      const part = candidates[candidate_index].content.parts[part_index];\n      if(part.inlineData) {\n        try {\n          const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;\n          fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));\n          console.log(`Output written to: ${filename}`);\n        } catch (err) {\n          console.error(err);\n        }\n      }\n    }\n  }\n  console.log(result.response.text());\n}\n\nrun();"}
          ],
        },
        {
          role: "model",
          parts: [
            
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    // TODO: Following code needs to be updated for client-side apps.
    const candidates = result.response.candidates;
    for(let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
      for(let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
        const part = candidates[candidate_index].content.parts[part_index];
        if(part.inlineData) {
          try {
            const filename = `output_${candidate_index}_${part_index}.${mime.extension(part.inlineData.mimeType)}`;
            fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
            console.log(`Output written to: ${filename}`);
          } catch (err) {
            console.error(err);
          }
        }
      }
    }
    console.log(result.response.text());
  }
  
 export default run;*/

 /*import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

 async function run(promp) {
  const apiKey = "YAIzaSyCoHStzA9rpmp7VqSVWh22D31GpWPdGPJw"; // Replace with your actual API key

  //const apiKey = process.env.AIzaSyCoHStzA9rpmp7VqSVWh22D31GpWPdGPJw;
  const url = new GoogleGenerativeAI(apiKey);

  //const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro-exp-03-25:generateContent?key=" + apiKey;

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    responseModalities: [],
    responseMimeType: "text/plain",
  };

  const requestBody = {
    generationConfig,
    prompt: {
      text: "promp", // Change this to the input you want
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    if (data && data.candidates) {
      data.candidates.forEach((candidate, index) => {
        if (candidate.content && candidate.content.parts) {
          candidate.content.parts.forEach((part, partIndex) => {
            if (part.text) {
              console.log(`Response ${index + 1}: ${part.text}`);
            }
          });
        }
      });
    } else {
      console.log("No valid response from Gemini API.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Run the function when needed
export default run;*/

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold
} from "@google/generative-ai";

const MODEL_NAME = "gemini-2.5-pro-exp-03-25";
const apiKey = "AIzaSyCoHStzA9rpmp7VqSVWh22D31GpWPdGPJw"

async function run(prompt) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({model: MODEL_NAME});

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 65536,
    //responseModalities: [
    //],
    //responseMimeType: "text/plain",
  };

  /*const safetySettings = []
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];*/

  const chat = model.startChat({
    generationConfig,
    //safetySettings,
    history: [

    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();


  
}

export default run;
