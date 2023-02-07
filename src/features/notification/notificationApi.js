import toast from 'react-hot-toast';
import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";
import { incrementUnread } from "./notificationSlice";

export const notificationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllNotifications: builder.query({
            query: () => '/notification',
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch, getState }) {
                const socket = io('http://localhost:8000');

                // get the user from the store
                const { user } = getState()?.auth;


                socket.on('newNotification', (data) => {
                    const { notification } = data || {};
                    
                    // check if this user
                    if (user?._id === notification.recipient) {
                        updateCachedData((draft) => {
                            draft.unshift(notification);
                        });

                        // increment unread notifications
                        dispatch(incrementUnread());

                        // toast message to the user
                        toast.success(notification.message, {
                            position: 'top-right',
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
                });

            }
        }),
    }),
});

export const { useGetAllNotificationsQuery } = notificationApi;