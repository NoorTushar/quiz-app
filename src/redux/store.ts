import { configureStore } from "@reduxjs/toolkit";
import { quizApi } from "./api/quizApi";
import quizSlice from "./features/quiz/quizSlice";

export const store = configureStore({
   reducer: {
      quizes: quizSlice, // this is local one, no need
      [quizApi.reducerPath]: quizApi.reducer,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(quizApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
