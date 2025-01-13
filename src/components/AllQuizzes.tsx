import { useGetAllQuizzesQuery } from "@/redux/api/quizApi";
import { Card } from "./ui/card";
import { useAppDispatch } from "@/redux/hooks";
import { setQuiz } from "@/redux/features/quiz/quizSlice";

export const AllQuizzes = () => {
   const { data, isLoading } = useGetAllQuizzesQuery(undefined);
   const dispatch = useAppDispatch();
   console.log(data);

   const handleSetQuiz = (questions) => {
      dispatch(setQuiz(questions));
   };

   return (
      <div>
         <h3 className="text-xl">AllQuizzes</h3>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            {!isLoading &&
               data.map((quiz, index: number) => (
                  <Card
                     onClick={() => handleSetQuiz(quiz.questions)}
                     key={index}
                     className="p-4 cursor-pointer hover:shadow-md hover:shadow-primary duration-300"
                  >
                     <h3>{quiz.title}</h3>
                     <p>{quiz.description}</p>
                  </Card>
               ))}
         </div>
      </div>
   );
};
