import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import './App.css';


function App() {

  const [theme, setTheme] = useState("light");
  
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

 return (
   <div className={`${theme}-theme`}>
     <div className="text-center">
     <h1 className="fw-bold m-3 pt-5">Theme switcher</h1>
     <p>{theme} theme</p>
     
     <Button variant="success" className="m-3 mb-5" onClick={toggleTheme}>
       Toggle Theme
     </Button>
     </div>
   </div>
 );
}

export default App;