import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "./ui/button";
import {
   completeQuiz,
   nextQuestion,
   prevQuestion,
   selectQuiz,
} from "@/redux/features/quiz/quizSlice";

const QuizControls = () => {
   const dispatch = useAppDispatch();
   const { currentQuestionIndex, questions, userAnswers, quizComplete } =
      useAppSelector(selectQuiz);
   const handleNextQuestion = () => {
      dispatch(nextQuestion());
   };

   const handlePrevQuestion = () => {
      dispatch(prevQuestion());
   };

   const handleCompleteQuiz = () => {
      dispatch(completeQuiz());
   };
   const lastQuestion = questions.length === currentQuestionIndex + 1;
   const isAnswerNull = userAnswers[currentQuestionIndex] === null;

   return (
      <div className="flex justify-between w-full">
         <Button
            disabled={currentQuestionIndex <= 0 || quizComplete}
            onClick={handlePrevQuestion}
         >
            Prev
         </Button>

         {lastQuestion ? (
            <Button
               onClick={handleCompleteQuiz}
               disabled={isAnswerNull || quizComplete}
            >
               Submit Quiz
            </Button>
         ) : (
            <Button
               disabled={lastQuestion || isAnswerNull}
               onClick={handleNextQuestion}
            >
               Next
            </Button>
         )}
      </div>
   );
};

export default QuizControls;
