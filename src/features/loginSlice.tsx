import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateToken } from "../helper/generateToken";
import { loginUser } from "../api/api";
import { AxiosResponse } from "axios";
import { getCookieValue } from "../helper/getCookieValue";

interface LoginState {
  isAuthenticated: boolean;
  isLogOut: boolean,
  error: string | null;
}

const initialState: LoginState = {
  isAuthenticated: false,
  isLogOut: true,
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      const token = getCookieValue('user');
      if(token){
        localStorage.setItem("accessToken", token)
        state.isAuthenticated = true;
        state.isLogOut = false;
        state.error = null;
      }
    },
    logout: (state, action: PayloadAction<{isLogOut: Boolean}>) => {
      const {isLogOut} = action.payload;
      if(isLogOut) {
        localStorage.removeItem("accessToken")
        state.isLogOut = true;
        state.isAuthenticated = false;
        state.error = null;
      } else {
        state.error = 'Oopss! An error was encountered while log out.'
      }
    }
  },
});

export const { login,logout } = loginSlice.actions;
export default loginSlice.reducer;
