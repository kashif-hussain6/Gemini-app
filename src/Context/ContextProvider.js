import { createContext, useEffect, useState } from "react";
import run from "../Config/Gemini"; // Ensure this path is correct

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [previousPrompt, setPreviousPrompt] = useState([]); // Use camelCase for consistency
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');
  const [displayedData, setDisplayedData] = useState('');

  // Function to handle the response and format it as required
  const formatResponse = (response) => {
    if (!response) return ''; // Ensure response is defined
    
    // Remove "## " from the start if it exists
    if (response.startsWith("## ")) {
      response = response.substring(3);
    }

    const responseArray = response.split("**");
    let formattedResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        formattedResponse += responseArray[i];
      } else {
        formattedResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    return formattedResponse.split("*").join("<br/>");
  };

  const simulateTyping = (text) => {
    let index = 0;
    setDisplayedData('');
    
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedData((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed by changing the interval (50ms)
  };

  const onSent = async (prompt) => { 
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    try {
      const response = await run(input);
      if (response) {
        const formattedResponse = formatResponse(response);
        setResultData(formattedResponse);
        simulateTyping(formattedResponse);
      } else {
        setResultData("No response received.");
        setDisplayedData("No response received.");
      }
    } catch (error) {
      setResultData("Error: " + error.message);
      setDisplayedData("Error: " + error.message);
    }
    setLoading(false);
    setInput("");
  };

  useEffect(() => {
    onSent("What is react js");
  }, []);

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    displayedData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
