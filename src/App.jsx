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
   <div className="column-flex align-items-center text-center justify-content-center mt-3">
     <div className="container-fluid m-7 p-3">
   <div className={`${theme}-theme`}>
     <div className="text-center p-5">
     <h1 className="fw-bold m-3 pb-2">Theme switcher</h1>
     <p>{theme} theme</p>     
     <Button variant="success" className="m-3 mb-5" onClick={toggleTheme}>
       Toggle Theme
     </Button>
     </div>
   </div></div></div>
 );
}

export default App;