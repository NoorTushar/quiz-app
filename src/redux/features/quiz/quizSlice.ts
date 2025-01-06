import { quizData } from "@/components/quizData";
import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TQuiz {
   questions: typeof quizData;
   quizComplete: boolean;
   currentQuestionIndex: number;
   userAnswers: (string | null)[];
}

// Define the initial state using that type
const initialState: TQuiz = {
   questions: quizData,
   quizComplete: false,
   currentQuestionIndex: 0,
   userAnswers: Array(quizData.length).fill(null),
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
      },
   },
});

export const { selectAnswer, nextQuestion, prevQuestion, completeQuiz } =
   quizSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectQuiz = (state: RootState) => state.quizes;

export default quizSlice.reducer;
