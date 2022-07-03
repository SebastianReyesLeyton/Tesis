import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import UserReducer from './user';

export default configureStore({
    reducer: {
        auth: AuthReducer,
        userRequest: UserReducer
    },
});