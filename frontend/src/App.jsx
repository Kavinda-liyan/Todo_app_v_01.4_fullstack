import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import CompletedTodo from "../pages/CompletedTodo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/completed" element={<CompletedTodo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
