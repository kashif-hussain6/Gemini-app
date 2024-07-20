const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyAQhrpyVBdhZcvcNhUWPsBu7IcOxcP39tg";  
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      // You can add history of the conversation here if needed
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default run;
