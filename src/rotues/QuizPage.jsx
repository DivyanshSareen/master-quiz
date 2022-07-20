import { useEffect, useState } from "react";
import { useQuiz } from "../context/quiz-context";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const { quiz, quesCounter, setQuesCounter, score, setUserAnswers } =
    useQuiz();

  const [question, setQuestion] = useState(quiz.questions[quesCounter]);
  useEffect(() => {
    if (quesCounter >= quiz.numberOfQuestions) {
      navigate("/result");
    } else {
      setQuestion(quiz.questions[quesCounter]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quesCounter]);
  return (
    <>
      <h5 className='h4 page-title center-text'>{quiz?.title}</h5>
      <section className='quiz'>
        <div className='quiz-stat'>
          <div className='ques-no'>
            Qusetion:
            <b>
              {quesCounter + 1} / {quiz?.numberOfQuestions}
            </b>
          </div>
          <div className='score'>
            Score: <b>{score}</b>
          </div>
        </div>
        <h5 className='h5 question'>{question?.question}</h5>
        <div className='options center-text'>
          {question?.options?.map((e) => (
            <div
              key={e}
              onClick={() => {
                setUserAnswers((userAnswers) => [...userAnswers, e]);
                if (quesCounter <= quiz?.numberOfQuestions - 1) {
                  setQuesCounter((quesCounter) => quesCounter + 1);
                }
              }}>
              <div className='choice'>{e}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QuizPage;
