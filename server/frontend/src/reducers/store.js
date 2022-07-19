import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import UserReducer from './user';
import UsersReducer from './users';
import GetUserReducer from './getUser';
import ItemsReducer from './items';

export default configureStore({
    reducer: {
        auth: AuthReducer,
        userRequest: UserReducer,
        usersRequest: UsersReducer,
        getUser: GetUserReducer,
        items: ItemsReducer
    },
});