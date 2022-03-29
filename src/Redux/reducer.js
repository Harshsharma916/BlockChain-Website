import { createSlice } from "@reduxjs/toolkit";

const Loader = createSlice({
  name: "loader",
  initialState: { loader: false },
  reducers: {
    setLoader: (state, action) => {
      state = state.loader = action.value;
    },
  },
});

export const { setLoader } = Loader.actions;
export const reducer = Loader.reducer;
