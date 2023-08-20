// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import { Todoes } from "./components/AllTodoes";
import { Basepage } from "./components/BasePage";
import { Login } from "./components/Login";
import { Navbaar } from "./components/Navbaar";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbaar/>
      <Routes>
        <Route path="/" element={<Basepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/todos" element = {<Todoes/>}/>
      </Routes>
    </div>
  );
}

export default App;
