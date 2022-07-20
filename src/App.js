import "./styles/App.css";
import HomePage from "./rotues/HomePage";
import { Routes, Route } from "react-router-dom";
import QuizPage from "./rotues/QuizPage";
import ResultPage from "./rotues/ResultPage";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
