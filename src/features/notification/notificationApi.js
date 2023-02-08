import toast from 'react-hot-toast';
import socket from '../../config/socket';
import notificationSound from '../../utils/notificationSound';
import { apiSlice } from "../api/apiSlice";
import { incrementUnread } from "./notificationSlice";

export const notificationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllNotifications: builder.query({
            query: () => '/notification',
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch, getState }) {
                // get the user from the store
                const { user } = getState()?.auth;

                socket.on('newNotification', (notification) => {
                    // check if this user
                    if (user?._id === notification.recipient) {
                        updateCachedData((draft) => {
                            draft.unshift(notification);
                        });

                        // play notification sound
                        notificationSound();

                        // increment unread notifications
                        dispatch(incrementUnread());

                        // show a right top toast notification
                        toast.success(notification.message, {
                            position: 'top-right',
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        });                        
                    }
                });
            }
        }),
    }),
});

export const { useGetAllNotificationsQuery } = notificationApi;