import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { GET_DESCRIPTION } from "../actions/description";
import { AppState } from "../store/store";


// Type for our state
export interface DescriptionState {
  description: string;
}

// Initial state
const initialState: DescriptionState = {
  description: '8 point full control',
};

// Actual Slice
export const descriptionReducer = createSlice({
  name: "description",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      state.description = action.payload;
    },

  },
});

