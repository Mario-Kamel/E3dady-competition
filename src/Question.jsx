import React from "react";
import Answer from "./Answer";

const Question = (props) => {
  return (
    <div className='question'>
      <h3>{props.text}</h3>
      <div className="answers">
        {props.answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer.answerText}
            isCorrect={answer.isCorrect}
            onClick={() => props.onClick(answer.isCorrect, answer)}
            disabled={props.disabled}
            highlight={props.correctAnswer === answer}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
