import React from "react";
import Main from "./compnent/Main/Main";
import Sidebar from "./compnent/Sidebar/Sidebar";

function App() {
  
  return (
    <div className="body bg-white">
      <div className="flex ">
        <Sidebar />
        <Main />
        
        
      </div>
    </div>
  );
}

export default App;
