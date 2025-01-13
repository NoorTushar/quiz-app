import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { selectAnswer, selectQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import QuizControls from "./QuizControls";

const Questions = () => {
   const { questions, currentQuestionIndex, userAnswers, quizComplete } =
      useAppSelector(selectQuiz);
   const dispatch = useAppDispatch();
   const currenQuestion = questions[currentQuestionIndex];

   const handleSelectAnswer = (answer: string) => {
      dispatch(selectAnswer({ answer, currentQuestionIndex }));
   };
   return (
      <div>
         {questions.length > 0 && (
            <Card className="max-w-[450px] mx-auto">
               <CardHeader>
                  <CardTitle className="min-h-[50px]">
                     {currenQuestion?.question}
                  </CardTitle>
                  <CardDescription>
                     Question {currentQuestionIndex + 1} of {questions.length}
                  </CardDescription>
               </CardHeader>
               <CardContent>
                  {currenQuestion.options.map((option, index) => (
                     <Button
                        disabled={quizComplete}
                        onClick={() => handleSelectAnswer(option)}
                        size="lg"
                        className={`w-full my-2  ${
                           userAnswers[currentQuestionIndex] === option
                              ? "bg-primary dark:bg-primary"
                              : "bg-secondary dark:bg-secondary-foreground"
                        }`}
                        key={index + index * Math.random()}
                        //  variant={
                        //     userAnswers[currentQuestionIndex] === option
                        //        ? "default"
                        //        : "outline"
                        //  }
                     >
                        {option}
                     </Button>
                  ))}
               </CardContent>
               <CardFooter className="flex justify-between">
                  <QuizControls />
               </CardFooter>
            </Card>
         )}
      </div>
   );
};

export default Questions;
