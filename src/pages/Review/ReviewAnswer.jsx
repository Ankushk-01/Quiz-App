// import React, { useContext } from 'react'
// import quizContext from '../../context/quizContext'
// import ReviewAnswerBox from './../../components/ReviewAnswerBox/ReviewAnswerBox'
// const ReviewAnswer = () => {
//     const context = useContext(quizContext)
//     const { answerList } = context


//     return (
//         <>
//         <div className='container'>
            
//             {
//                 answerList.map((index) => {
//                     const { question, options, category, myAnswer, rightAnswer } = index

//                     return <ReviewAnswerBox key={question} myAnswer={myAnswer} rightAnswer={rightAnswer} question={question} options={options} category={category} num={answerList.indexOf(index) + 1} />
                    
//                 })
//             }

//             </div>
//         </>
//     )
// }

// export default ReviewAnswer


import React, { useContext } from 'react';
import quizContext from '../../context/quizContext';
import ReviewAnswerBox from './../../components/ReviewAnswerBox/ReviewAnswerBox';
// import NavBar from '../../components/NavBar/NavBar';

const ReviewAnswer = () => {
  const context = useContext(quizContext);
  const { answerList } = context;

  console.log('answerList:', answerList);

  return (
    <>
    {/* <NavBar></NavBar> */}
      <div className='container'>
        {answerList.map((index) => {
          const { question, options, category, myAnswer, rightAnswer } = index;
          console.log('index:', index);
          console.log('question:', question);
          console.log('options:', options);
          console.log('category:', category);
          console.log('myAnswer:', myAnswer);
          console.log('rightAnswer:', rightAnswer);

          return (
            <ReviewAnswerBox
              key={question}
              myAnswer={myAnswer}
              rightAnswer={rightAnswer}
              question={question}
              options={options}
              category={category}
              num={answerList.indexOf(index) + 1}
            />
          );
        })}
      </div>
    </>
  );
};

export default ReviewAnswer;

