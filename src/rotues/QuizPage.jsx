import { useQuiz } from "../context/quiz-context";

const QuizPage = () => {
  const { quiz } = useQuiz();
  return (
    <>
      <h5 className='h4 page-title center-text'>
        I am not superstitious, but I'm a little 'stitious.
      </h5>
      <section className='quiz'>
        <div className='quiz-stat'>
          <div className='ques-no'>
            Qusetion: <b>1 / 5</b>
          </div>
          <div className='score'>
            Score: <b>0</b>
          </div>
        </div>
        <h5 className='h5 question'>
          What does Michael pretend to fire Pam over in season one?
        </h5>
        <div className='options center-text'>
          <a href='./result.html'>
            <div className='choice'>Stealing post-it notes</div>
          </a>
          <a href='./result.html'>
            <div className='choice'>Not Ansering the phone</div>
          </a>
          <a href='./result.html'>
            <div className='choice'>Wearing her glasses</div>
          </a>
        </div>
      </section>
    </>
  );
};

export default QuizPage;
