import { createContext, useContext, useState } from "react";
import data from "../data/data";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [quizList, setQuizList] = useState(data);
  const [quiz, setQuiz] = useState({});
  const [quesCounter, setQuesCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const resetQuiz = () => {
    setQuiz({});
    setQuesCounter(0);
    setScore(0);
    setUserAnswers([]);
  };

  return (
    <QuizContext.Provider
      value={{
        quizList,
        quiz,
        setQuiz,
        quesCounter,
        setQuesCounter,
        score,
        userAnswers,
        setScore,
        setUserAnswers,
        resetQuiz,
      }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  return useContext(QuizContext);
};

export { QuizProvider, useQuiz };
