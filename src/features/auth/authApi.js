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
        })
    })
})


export const { useRegisterUserMutation, useLoginUserMutation } = authApi;