import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "./Components/Tracker/trackerSlice";

export const store = configureStore({
  reducer: {
    tracker: trackerReducer,
  },
});
