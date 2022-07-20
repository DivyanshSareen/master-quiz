import { Link } from "react-router-dom";

const RulesPage = () => {
  return (
    <>
      <h5 className='h4 page-title center-text'>Rules for the Quiz</h5>
      <section className='quiz'>
        <div className='quiz-stat h4'>
          1. You will get MCQs relevant to the quiz topic
        </div>
        <div className='quiz-stat h4'>
          2. Click on the option you think is the right choice
        </div>
        <div className='quiz-stat h4'>
          3. Your score and answers will be shared once you have completed the
          quiz
        </div>
        <div className='quiz-stat h4'>
          4. The most important rule is to have fun!
        </div>
        <Link to='../quiz'>
          <button className='btn'> Play Now!</button>
        </Link>
      </section>
    </>
  );
};

export default RulesPage;
