import React,{useState} from "react";
import "./App.css";
import Login from "./components/Login";
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './components/Dashboard'



function App() {
  const [id, setId] = useLocalStorage("id");
  const handleId = (id) => {
    setId(id);
  };
  return (
    <div> <Dashboard id={id}/> </div>
  )
}


export default App;
