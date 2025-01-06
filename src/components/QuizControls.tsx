import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "./ui/button";
import {
   nextQuestion,
   prevQuestion,
   selectQuiz,
} from "@/redux/features/quiz/quizSlice";

const QuizControls = () => {
   const dispatch = useAppDispatch();
   const { currentQuestionIndex, questions } = useAppSelector(selectQuiz);
   const handleNextQuestion = () => {
      dispatch(nextQuestion());
   };

   const handlePrevQuestion = () => {
      dispatch(prevQuestion());
   };
   const lastQuestion = questions.length === currentQuestionIndex + 1;
   return (
      <div className="flex justify-between w-full">
         <Button
            disabled={currentQuestionIndex <= 0}
            onClick={handlePrevQuestion}
         >
            Prev
         </Button>
         {lastQuestion ? (
            <Button>Submit</Button>
         ) : (
            <Button disabled={lastQuestion} onClick={handleNextQuestion}>
               Next
            </Button>
         )}
      </div>
   );
};

export default QuizControls;
