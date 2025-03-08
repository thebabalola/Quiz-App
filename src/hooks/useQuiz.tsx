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
		  {
			id: 6,
			question: "How many states are there in Nigeria?",
			options: ["30", "32", "36", "40"],
			correctAnswer: "36",
		  },
		  {
			id: 7,
			question: 'Which Nigerian city is known as the "Center of Excellence"?',
			options: ["Abuja", "Lagos", "Kano", "Enugu"],
			correctAnswer: "Lagos",
		  },
		  {
			id: 8,
			question: "Which ethnic group is the largest in Nigeria?",
			options: ["Igbo", "Hausa-Fulani", "Yoruba", "Tiv"],
			correctAnswer: "Hausa-Fulani",
		  },
		  {
			id: 9,
			question: "Who composed Nigeria’s National Anthem?",
			options: ["Ben Odiase", "Wole Soyinka", "Chinua Achebe", "Fela Kuti"],
			correctAnswer: "Ben Odiase",
		  },
		  {
			id: 10,
			question: "Which Nigerian was the first African to win a Nobel Prize in Literature?",
			options: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Adichie", "Ben Okri"],
			correctAnswer: "Wole Soyinka",
		  },
		  {
			id: 11,
			question: "What is the name of Nigeria’s currency?",
			options: ["Cedi", "Shilling", "Naira", "Dollar"],
			correctAnswer: "Naira",
		  },
		  {
			id: 12,
			question: "What is the name of Nigeria’s national football team?",
			options: ["Black Stars", "Super Eagles", "Indomitable Lions", "Bafana Bafana"],
			correctAnswer: "Super Eagles",
		  },
		  {
			id: 13,
			question: "Who was the first military Head of State in Nigeria?",
			options: ["Yakubu Gowon", "Murtala Mohammed", "Aguiyi Ironsi", "Olusegun Obasanjo"],
			correctAnswer: "Aguiyi Ironsi",
		  },
		  {
			id: 14,
			question: "Which natural resource is Nigeria most known for?",
			options: ["Gold", "Diamond", "Oil", "Coal"],
			correctAnswer: "Oil",
		  },
		  {
			id: 15,
			question: "Which Nigerian musician is known as the pioneer of Afrobeat?",
			options: ["Wizkid", "Fela Kuti", "Burna Boy", "King Sunny Ade"],
			correctAnswer: "Fela Kuti",
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