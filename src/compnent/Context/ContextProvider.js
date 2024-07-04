import { createContext, useEffect } from "react";
import run from "../Config/Gemini"; // Ensure this path is correct

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    try {
      console.log("Calling run function with prompt:", prompt);
      const result = await run(prompt);
      console.log("Result from run function:", result);
    } catch (error) {
      console.error("Error in onSent:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered"); // Add logging to verify useEffect call
    onSent("What is react js");
  }, []);

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
