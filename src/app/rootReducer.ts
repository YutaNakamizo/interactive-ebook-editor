import { combineReducers } from "@reduxjs/toolkit";
import { documentReducer } from "@/features/document/reducers";

export const rootReducer = combineReducers({
  document: documentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
