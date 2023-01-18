import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: "/auth/register",
                method: 'POST',
                body
            })
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const {data} = await queryFulfilled;

                    // update the localstorate
                    localStorage.setItem('user', JSON.stringify(data?.user));
                    localStorage.setItem('token', JSON.stringify(data?.token));

                    // update the store
                    dispatch(userLoggedIn({user: data?.user, token: data?.token}));

                } catch(error) {
                    // do
                }
            } 
        }),
        userForgotPassword: builder.mutation({
            query: (body) => ({
                url: `/auth/forgot-password`,
                method: 'POST',
                body
            })
        }),
        resetPassword: builder.mutation({
            query: ({userId, token, body}) => ({
                url: `/auth/reset-password/${userId}/${token}`,
                method: 'POST',
                body
            })
        }),
    })
})


export const { useRegisterUserMutation, useLoginUserMutation, useUserForgotPasswordMutation, useResetPasswordMutation } = authApi;