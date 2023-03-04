import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    fetchUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
