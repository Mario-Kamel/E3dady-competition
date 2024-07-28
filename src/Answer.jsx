import React from "react";
import './App.css';

const Answer = (props) => {
  return (
    <button 
      className={`answer ${props.highlight ? 'correct' : ''}`} 
      onClick={props.onClick} 
      disabled={props.disabled}
    >
      {props.answer}
    </button>
  );
}

export default Answer;
