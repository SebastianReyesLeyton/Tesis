import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import UserReducer from './user';
import UsersReducer from './users';

export default configureStore({
    reducer: {
        auth: AuthReducer,
        userRequest: UserReducer,
        usersRequest: UsersReducer
    },
});