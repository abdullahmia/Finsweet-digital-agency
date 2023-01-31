import { apiSlice } from "../api/apiSlice";


export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addContact: builder.mutation({
            query: (body) => ({
                url: '/contact',
                method: 'POST',
                body
            })
        })
    })
})


export const { useAddContactMutation } = contactApi;