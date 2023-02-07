import toast from 'react-hot-toast';
import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";
import { incrementUnread } from '../notification/notificationSlice';

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
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch }) {
                const socket = io('http://localhost:8000');
                socket.on('newContact', (contact) => {
                    updateCachedData((draft) => {
                        draft.push(contact);
                    })

                    // increment unread notifications
                    dispatch(incrementUnread());
                    

                    // create a toast message if the user is on the admin dashboard
                    if (window.location.pathname === '/admin/contacts') {
                        toast.success(`${contact.name} has sent you a message!`, {
                            position: 'bottom-right',
                            style: {
                                background: '#333',
                                color: '#fff',
                            },
                            iconTheme: {
                                primary: '#fff',
                                secondary: '#333',
                            },
                        });
                    }
                    

                })
                cacheDataLoaded();
                cacheEntryRemoved(() => {
                    socket.disconnect();
                })
            }
        })
    })
})


export const { useAddContactMutation, useGetContactsQuery } = contactApi;