import {useState} from "react";

export interface IQuestions {
	id:number;
	question: string;
	options: string[];
	correctAnswer: string;
}

export const useQuiz = () => {
	const [questions] = useState<IQuestions[]> ([
		{
			id: 1,
			question: "What is the capital of Nigeria?",
			options: ["Abuja", "Lagos", "Kano", "Port Harcourt"],
			correctAnswer: "Abuja",
		  },
		  {
			id: 2,
			question: "Who was Nigeria's first president?",
			options: ["Olusegun Obasanjo", "Nnamdi Azikiwe", "Ahmadu Bello", "Tafawa Balewa"],
			correctAnswer: "Nnamdi Azikiwe",
		  },
		  {
			id: 3,
			question: "Which Nigerian musician is known for pioneering Afrobeat?",
			options: ["Davido", "Fela Kuti", "Burna Boy", "King Sunny Ade"],
			correctAnswer: "Fela Kuti",
		  },
		  {
			id: 4,
			question: "Which river is the longest in Nigeria?",
			options: ["River Benue", "River Niger", "Osun River", "Cross River"],
			correctAnswer: "River Niger",
		  },
		  {
			id: 5,
			question: "What year did Nigeria gain independence from Britain?",
			options: ["1960", "1957", "1975", "1985"],
			correctAnswer: "1960",
		  },
	]);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);

	const checkAnswer = (selectedAnswer: string) => {
		if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
			setScore(score + 1);
		}
		setCurrentQuestionIndex(currentQuestionIndex+1);
	}

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
	  };
	  
	return {questions, currentQuestionIndex, checkAnswer, score, restartQuiz};
}