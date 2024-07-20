import { createContext, useState } from "react";
import run from "../Config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');
  const [responses, setResponses] = useState([]);

  const formatResponse = (response) => {
    if (!response) return '';

    if (response.startsWith("## ")) {
      response = response.substring(3);
    }

    const responseArray = response.split("**");
    let formattedResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      formattedResponse += i % 2 === 0 ? responseArray[i] : "<b>" + responseArray[i] + "</b>";
    }
    return formattedResponse.split("*").join("<br/>");
  };

  const onSent = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPreviousPrompt((prevPrompts) => [...prevPrompts, input]);

    try {
      const response = await run(input);
      const formattedResponse = response ? formatResponse(response) : "No response received.";
      const newResponse = { prompt: input, response: formattedResponse };
      setResponses((prevResponses) => [...prevResponses, newResponse]);
      setResultData(formattedResponse);
    } catch (error) {
      const errorMessage = "Error: " + error.message;
      const newResponse = { prompt: input, response: errorMessage };
      setResponses((prevResponses) => [...prevResponses, newResponse]);
      setResultData(errorMessage);
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    responses,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
