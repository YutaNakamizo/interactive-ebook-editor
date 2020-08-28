import { combineReducers } from "@reduxjs/toolkit";
import { slateReducer } from "@/features/slate/slice";

export const rootReducer = combineReducers({
  slate: slateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
