import { apiSlice } from "../api/apiSlice";


export const contactApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addContact: builder.mutation({
            query: (body) => ({
                url: '/contact',
                method: 'POST',
                body
            })
        }),
        getContacts: builder.query({
            query: () => '/contact'
        })
    })
})


export const { useAddContactMutation, useGetContactsQuery } = contactApi;