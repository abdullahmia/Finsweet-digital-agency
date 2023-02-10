import socket from "../../config/socket";
import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get user orders
        getUserOrders: builder.query({
            query: () => `/order/user`,
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch, getState }) {
                socket.on('updateOrder', (order) => {
                    // update the order status
                    if (order) {
                        updateCachedData((draft) => {
                            let orderData = draft.find(order => order._id === order._id);
                            orderData.status = order.status;
                        });
                    }

                });

                // create a new order
                socket.on('newOrder', (order) => {
                    updateCachedData((draft) => {
                        draft.unshift(order);
                    });
                });
            }
        }),
        getSingleOrder: builder.query({
            query: (id) => `/order/${id}`,
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData, dispatch, getState }) {
                socket.on('updateOrder', (order) => {
                    // update the order status
                    if (order) {
                        updateCachedData((draft) => {
                            draft.order.status = order.status;
                        });
                    }

                });
            }
        }),
        getAllOrders: builder.query({
            query: (page) => `/order/?page=${page}`,
            async onCacheEntryAdded(arg, { cacheDataLoaded, cacheEntryRemoved, updateCachedData }) {
                // create a new order
                socket.on('newOrder', (order) => {
                    updateCachedData((draft) => {
                        draft.orders.unshift(order);
                    });
                });
            }
        }),
        updateOrder: builder.mutation({
            query: ({id, body}) => ({
                url: `/order/${id}`,
                method: 'PATCH',
                body
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                let updateSingleOrder = dispatch(apiSlice.util.updateQueryData('getSingleOrder', arg.id, (draft) => {
                    draft.order.status = arg.body.status;
                }))

                let updateOrders = dispatch(apiSlice.util.updateQueryData('getAllOrders', 1, (draft) => {
                    let order = draft.orders.find(order => order._id === arg.id);
                    order.status = arg.body.status;
                }))

                try {
                    await queryFulfilled;
                } catch (err) {
                    updateSingleOrder.undo();
                    updateOrders.undo();
                }
            }
        })
    })
})


export const { useGetUserOrdersQuery, useGetSingleOrderQuery, useGetAllOrdersQuery, useUpdateOrderMutation } = orderApi;