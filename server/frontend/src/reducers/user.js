import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'userRequest',
    initialState: {},
    reducers: {
        register: (state, data) => {
            state = Object.assign({}, data.payload);
            return state;
        },
        userError: (state, data) => {
            state = Object.assign({}, data.payload);
            return state;
        },
        resetUserState: (state) => {
            state = {}
            return state;
        }
    }
});

export const { register, userError, resetUserState } = userSlice.actions;
export default userSlice.reducer;