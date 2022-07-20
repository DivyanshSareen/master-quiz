import { Link } from "react-router-dom";
import { useQuiz } from "../context/quiz-context";

const HomePage = () => {
  const { quizList, setQuiz } = useQuiz();
  return (
    <>
      <h5 className='h4 page-title center-text'>Quiz App</h5>
      <section className='topics'>
        {quizList.map((e) => (
          <Link
            key={e.id}
            to='/quiz'
            onClick={() => {
              setQuiz(e);
            }}>
            <div className='card'>
              <div className='card-head'>
                <div className='card-img resp-img'>
                  <img
                    src={require("../assets/" + e.thumbnail)}
                    alt='card'></img>
                </div>
                <div className='card-title h6'>{e.title}</div>
                <div className='card-subtitle subtitle2'>
                  Take this quiz to test yourself!
                </div>
                <div className='card-subtitle subtitle2'>
                  {e.numberOfQuestions} Questions
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default HomePage;
