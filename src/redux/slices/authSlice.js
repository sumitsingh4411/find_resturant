import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem("user"));
const initialState = {
    username: userData ? userData?.fields?.username : null,
    password: userData ? userData?.fields?.password : null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.username = null;
            state.password = null;
        },
    }
})
export const selectAuth = {
    ...authSlice.actions,
}

export const authActions = authSlice.actions;
export default authSlice.reducer;