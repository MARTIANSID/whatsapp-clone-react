import React from "react";
import "./App.css";
import Login from "./components/Login";
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './hooks/useLocalStorage'


function App() {
  const [id, setId] = useLocalStorage("id");
  const handleId = (id) => {
    setId(id);
  };
  return (
    <div> 
    {id?<Dashboard id={id}/> : <Login onIdSubmit={handleId} />}</div>)
 
}

export default App;
