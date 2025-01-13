import { quizData } from "@/components/quizData";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TQuiz {
   questions: typeof quizData;
   quizComplete: boolean;
   currentQuestionIndex: number;
   userAnswers: (string | null)[];
   userScore: number;
}

// Define the initial state using that type
const initialState: TQuiz = {
   questions: [],
   quizComplete: false,
   currentQuestionIndex: 0,
   userAnswers: Array(quizData.length).fill(null),
   userScore: 0,
};

export const quizSlice = createSlice({
   name: "quiz",
   initialState,
   reducers: {
      selectAnswer: (state, action) => {
         const { answer, currentQuestionIndex } = action.payload;
         state.userAnswers[currentQuestionIndex] = answer;
      },
      nextQuestion: (state) => {
         if (state.currentQuestionIndex < state.questions.length - 1) {
            state.currentQuestionIndex += 1;
         }
      },
      prevQuestion: (state) => {
         if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex -= 1;
         }
      },
      completeQuiz: (state) => {
         state.quizComplete = true;
         let correctAnswer = 0;

         state.questions.forEach((question, index) => {
            if (question.correctAnswer === state.userAnswers[index]) {
               correctAnswer++;
            }
         });

         state.userScore = correctAnswer;
      },

      restartQuiz: (state) => {
         state.currentQuestionIndex = 0;
         state.questions = quizData;
         state.quizComplete = false;
         state.userAnswers = Array(quizData.length).fill(null);
         state.userScore = 0;
      },

      setQuiz: (state, action) => {
         state.questions = action.payload;
      },
   },
});

export const {
   selectAnswer,
   nextQuestion,
   prevQuestion,
   completeQuiz,
   restartQuiz,
   setQuiz,
} = quizSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectQuiz = (state: RootState) => state.quizes;

export default quizSlice.reducer;
