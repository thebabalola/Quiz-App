import React from "react";
import { IQuestions } from "../hooks/useQuiz";

interface QuestionProps {
  questionData: IQuestions;
  checkAnswer: (selectedAnswer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ questionData, checkAnswer }) => {
  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => checkAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
