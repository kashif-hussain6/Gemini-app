import { createContext, useEffect, useState } from "react";
import run from "../Config/Gemini"; // Ensure this path is correct

export const Context = createContext();


const ContextProvider = (props) => {

  const [input , setInput ]= useState('')
  const [recentPrompt , setRecentPrompt] = useState('')
  const [previousPrompt , SetPreviousPrompt] = useState([])
  const [showResult , setShowResult] = useState(false)
  const [loading , setLoading] = useState(false)
  const [resultData , setResultData] = useState('')


  const onSent = async (prompt) => { 
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)     
      const response = await run(input);
      setResultData(response)
      setLoading(false)
      setInput("")
  };


  useEffect(() => {
    console.log("useEffect triggered"); 
    onSent("What is react js");
  }, []);

  const contextValue = {
    previousPrompt,
    SetPreviousPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
