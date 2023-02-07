import { apiSlice } from "../api/apiSlice";


export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get user orders
        getUserOrders: builder.query({
            query: () => `/order/user`
        }),
        getSingleOrder: builder.query({
            query: (id) => `/order/${id}`
        }),
        getAllOrders: builder.query({
            query: () => `/order/`
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

                let updateOrders = dispatch(apiSlice.util.updateQueryData('getAllOrders', undefined, (draft) => {
                    let order = draft.find(order => order._id === arg.id);
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