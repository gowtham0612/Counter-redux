import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice";
const Store = configureStore({
  reducer: counterSlice
});

export default Store;
