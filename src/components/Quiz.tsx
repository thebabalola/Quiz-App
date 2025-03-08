import React from "react";
import { useQuiz } from "../hooks/useQuiz";
import Question from "./Questions";

const Quiz: React.FC = () => {
  const { questions, currentQuestionIndex, checkAnswer, score, restartQuiz } =
    useQuiz();

  const isQuizFinished = currentQuestionIndex >= questions.length;

  return (
    <div className="quiz-container">
      {isQuizFinished ? (
        <div className="result">
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <Question
          questionData={questions[currentQuestionIndex]}
          checkAnswer={checkAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
