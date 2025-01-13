import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
   reducerPath: "quizApi",
   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
   endpoints: (builder) => ({
      getAllQuizzes: builder.query({
         query: () => "/quizzes",
      }),
   }),
});

export const { useGetAllQuizzesQuery } = quizApi;
