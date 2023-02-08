import socket from '../../config/socket';
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
            query: () => '/contact',
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch, getState }) {
                socket.on('newContact', (contact) => {
                    updateCachedData((draft) => {
                        draft.push(contact);
                    })
                })
            }
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contact/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                let patchResult = dispatch(apiSlice.util.updateQueryData('getContacts', undefined, (draft) => {
                    let contacts = draft.filter((contact) => contact._id !== id);
                    return contacts;
                }))

                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
                }
            }
        })
    })
})


export const { useAddContactMutation, useGetContactsQuery, useDeleteContactMutation } = contactApi;