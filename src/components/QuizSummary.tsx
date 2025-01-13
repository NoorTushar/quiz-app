import {
   completeQuiz,
   restartQuiz,
   selectQuiz,
} from "@/redux/features/quiz/quizSlice";
import { Button } from "./ui/button";
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "./ui/dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useState } from "react";

const QuizSummary = () => {
   const dispatch = useAppDispatch();
   const [open, setOpen] = useState(false);
   const {
      currentQuestionIndex,
      userAnswers,
      quizComplete,
      userScore,
      questions,
   } = useAppSelector(selectQuiz);

   const isAnswerNull = userAnswers[currentQuestionIndex] === null;

   const handleCompleteQuiz = () => {
      dispatch(completeQuiz());
   };

   const handleRestartQuiz = () => {
      dispatch(restartQuiz());
      setOpen(false);
   };

   return (
      <div className="">
         <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
               <Button
                  onClick={handleCompleteQuiz}
                  disabled={isAnswerNull || quizComplete}
               >
                  Submit Quiz
               </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px]">
               <DialogHeader>
                  <DialogTitle>Quiz Completed</DialogTitle>
               </DialogHeader>
               <div>
                  <p>
                     {" "}
                     You have successfully answered{" "}
                     <b className="text-lg">{userScore}</b> out of{" "}
                     <b className="text-lg">{questions.length}</b> questions.
                  </p>

                  <p className="my-2 font-bold">Summary:</p>
                  {/* {questions.map((question)=>)} */}
                  <ScrollArea className="h-[300px] rounded-md border">
                     <div className="p-4">
                        {userAnswers.map((answer, index) => (
                           <div key={answer} className="text-sm *:mt-3">
                              <p className="font-semibold">Question</p>
                              <p>
                                 {index + 1}. {questions[index]?.question}
                              </p>
                              <p className="font-semibold">Your Answer</p>
                              <p
                                 className={`text-sm ${
                                    questions[index]?.correctAnswer === answer
                                       ? "text-green-500"
                                       : "text-red-500"
                                 }`}
                              >
                                 {answer}
                              </p>
                              <p className="font-semibold">Correct Answer</p>
                              <p className="text-sm">
                                 {questions[index]?.correctAnswer}
                              </p>
                              <Separator className="my-4" />
                           </div>
                        ))}
                     </div>
                  </ScrollArea>
               </div>
               <DialogFooter>
                  <Button onClick={handleRestartQuiz} type="submit">
                     Restart Quiz
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default QuizSummary;
