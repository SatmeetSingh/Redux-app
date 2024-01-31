import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  TotalIncome: 0,
  TotalExpence: 0,
  value: [],
};

export const trackerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addObject: (state = initialState, action) => {
      state.value.push(action.payload);
    },
    removeObject: (state, action) => {
      const objectIdToRemove = action.payload;
      state.value.splice(objectIdToRemove, 1);
    },
    totalIncome: (state) => {
      state.TotalIncome = state.value.reduce((accumulator, obj) => {
        return obj.amount > 0
          ? Number(accumulator) + Number(obj.amount)
          : Number(accumulator);
      }, 0);
    },
    totalExpence: (state) => {
      state.TotalExpence = state.value.reduce((accumulator, obj) => {
        return obj.amount < 0
          ? Number(accumulator) + Number(obj.amount)
          : Number(accumulator);
      }, 0);
    },
  },
});

export const { addObject, totalIncome, totalExpence, removeObject } =
  trackerSlice.actions;

export default trackerSlice.reducer;
