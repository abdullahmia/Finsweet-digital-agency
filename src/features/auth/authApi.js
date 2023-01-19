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
        changePassword: builder.mutation({
            query: (body) => ({
                url: '/auth/change-password',
                method: 'POST',
                body
            })
        }),
        getUser: builder.query({
            query: (userId) => `/auth/user/${userId}`
        }),
        updateUser: builder.mutation({
            query: ({userId, body}) => ({
                url: `/auth/user/${userId}`,
                method: 'PATCH',
                body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
                try {
                    const {userId} = arg;
                    const result = await queryFulfilled;
                    const {token} = getState()?.auth;

                    // update the localstorage
                    localStorage.setItem('user', JSON.stringify(result.data));

                    // update the store
                    dispatch(userLoggedIn({
                        user: result.data,
                        token: token
                    }));

                    // update cache
                    dispatch(apiSlice.util.updateQueryData('getUser', userId, (draft) => {
                        const {firstName, lastName, birthday, gender, phone, role} = result.data;
                        draft.firstName = firstName;
                        draft.lastName = lastName;
                        draft.birthday = birthday;
                        draft.gender = gender;
                        draft.phone = phone;
                        draft.role = role;
                    }))
                    
                } catch (err) {
                    // do nothing
                }
            }
        })
    })
})


export const { useRegisterUserMutation, useLoginUserMutation, useUserForgotPasswordMutation, useResetPasswordMutation, useChangePasswordMutation, useGetUserQuery, useUpdateUserMutation } = authApi;