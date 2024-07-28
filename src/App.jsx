import React, { useState} from 'react';
import Question from './Question';
import Timer from './Timer';
import ScoreChart from './ScoreChart';
import './App.css';
import questions from './Questions.jsx';

const App = (props) => {
  const questionTime = 60;
  const numberOfContestants = 3;
  const [score, setScore] = useState(new Array(numberOfContestants).fill(0));
  const [turn, setTurn] = useState(1);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [time, setTime] = useState(questionTime); // Initialize timer state
  const [showTimeUp, setShowTimeUp] = useState(false); // State for "Time Up" text
  const [counting, setCounting] = useState(true);
  const [answersDisabled, setAnswersDisabled] = useState(false); // State for disabling answers
  const [correctAnswer, setCorrectAnswer] = useState(null); // State for correct answer
  const [showChart, setShowChart] = useState(false); // State for showing the chart
  const [oldScores, setOldScores] = useState([...score]); // State for old scores
  const [answerStatus, setAnswerStatus] = useState(''); // State for answer status
  const [quizStarted, setQuizStarted] = useState(false); // State for quiz start
  const currentQuestion = questions[currentQuestionNumber];

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerClick = (isCorrect, answer) => {
    setCounting(false);
    if (isCorrect) {
      setScore(prevScore => {
        const newScore = [...prevScore];
        newScore[turn - 1] += Math.round(500 + (500 / questionTime) * time);
        return newScore;
      });
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }
    setAnswersDisabled(true); // Disable answers after selection
    setTimeout(() => {
      setAnswerStatus(''); // Clear the answer status after 2 seconds
      setCorrectAnswer(null); // Reset correct answer for the next question
    }, 5000);
  };

  const handleNextQuestion = () => {
    if(currentQuestionNumber === questions.length - 1) {
      return;
    }
    setCounting(true);
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setAnswersDisabled(false);
    setTime(questionTime);
    setShowChart(false);
    setTurn(turn + 1);
    if (turn === numberOfContestants) {
      setTurn(1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const handleTimeUp = () => {
    setShowTimeUp(true); // Show "Time Up" text
    setCounting(false);

    setAnswersDisabled(true); // Disable answers
    setTimeout(() => {
      setShowTimeUp(false); // Hide "Time Up" text after 2 seconds
      setCorrectAnswer(currentQuestion.answerOptions.find(option => option.isCorrect)); // Highlight correct answer
      setCorrectAnswer(null); // Reset correct answer for the next question
    }, 3000);
  };

  const handleShowChart = () => {
    setOldScores([...score]);
    setShowChart(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src='stminalogo.png' alt="logo" />
        <h1> 📖 مسابقة إنجيلي دليلي 📖</h1>
        <h2>{turn} فريق</h2>
      </header>
      {!quizStarted ? (
        <button className='start-button' onClick={handleStartQuiz}>ابدأ المسابقة</button>
      ) : (
        <>
          {showTimeUp && <div className="time-up">الوقت خلص ⌚</div>}
          {answerStatus && (
            <div className={`answer-status ${answerStatus === 'correct' ? 'correct-answer' : 'wrong-answer'}`}>
              {answerStatus === 'correct' ? '👌🏻 إجابة صحيحة' : '🤡 إجابة خاطئة'}
            </div>
          )}
          <div className="question-timer-container">
            {!showChart ? (
              <>
                <Question 
                  text={currentQuestion.questionText} 
                  answers={currentQuestion.answerOptions}
                  onClick={handleAnswerClick}
                  disabled={answersDisabled}
                  correctAnswer={correctAnswer}
                />
                {counting ? <Timer time={time} setTime={setTime} onTimeUp={handleTimeUp} counting={counting}/> : <h1>الوقت خلص</h1>}
              </>
            ) : (
              <ScoreChart oldScores={oldScores} newScores={score} />
            )}
          </div>
          <div>
            <button className='option-button' onClick={handleShowChart}>النتيجة</button>
            <button className='option-button' onClick={handleNextQuestion}>اللي بعده</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
