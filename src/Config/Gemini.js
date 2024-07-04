// Install the Generative AI SDK
// $ npm install @google/generative-ai
// See the getting started guide for more information
// https://ai.google.dev/gemini-api/docs/get-started/node

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

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

  const inputMessage = "INSERT_INPUT_HERE";  // Replace with your actual input
  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text(), 'logs message');
  return result.response.text();
}

export default run;
