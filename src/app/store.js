import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import articleCategoryReducer from '../features/articleCategory/articleCategorySlice';
import authReducer from '../features/auth/authSlice';
import notificationReducer from '../features/notification/notificationSlice';
import projectCategoryReducer from '../features/projectCategory/projectCategorySlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        articleCategory: articleCategoryReducer,
        projectCategory: projectCategoryReducer,
        notification: notificationReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
})