import { useEffect, useState } from "react";
import { useQuiz } from "../context/quiz-context";

const ResultPage = () => {
  const { userAnswers, score, setScore, quiz } = useQuiz();
  const [result, setResult] = useState([]);
  const getScore = () => {
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === quiz.questions[i].answer) {
        setScore((score) => score + 10);
        setResult((result) => [
          ...result,
          {
            question: quiz.questions[i].question,
            ans: userAnswers[i],
            isCorrect: true,
          },
        ]);
      } else
        setResult((result) => [
          ...result,
          {
            question: quiz.questions[i].question,
            ans: userAnswers[i],
            isCorrect: false,
          },
        ]);
    }
  };
  useEffect(() => {
    if (score === 0) getScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h4 className='h4 page-title center-text'>{quiz.title}</h4>
      <section className='quiz'>
        <div className='final-stat center-text'>
          <h5 className='h5'>
            Final Score:{" "}
            <b>
              {score} / {quiz.numberOfQuestions * 10}
            </b>
          </h5>
        </div>
        {result.slice(0, userAnswers.length).map((res) => (
          <>
            <h5 className='h5 question'>{res.question}</h5>
            <div className='options center-text'>
              <div
                className='choice'
                style={{
                  backgroundColor: res.isCorrect
                    ? "var(--correct)"
                    : "var(--wrong)",
                }}>
                {res.ans}
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default ResultPage;
