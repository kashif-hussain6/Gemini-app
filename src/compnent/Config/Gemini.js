import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBbXod5NXsZ5zSq2M303UokKLEgm7OQqqo";
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
  try {
    console.log("Starting chat session...");
    const chatSession = await model.startChat({
      generationConfig,
      history: [],
    });
    console.log("Chat session started. Sending message...");

    const result = await chatSession.sendMessage(prompt);
    console.log("Message sent. Processing response...");

    const responseText = result.response.text;
    console.log("Response received:", responseText);

    return responseText; // Return the result for further use
  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Rethrow error to handle it in the calling context
  }
}

export default run;
