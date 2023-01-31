import { apiSlice } from '../api/apiSlice';


export const serviceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: () => `/service`
        }),

        getService: builder.query({
            query: (id) => `/service/${id}`
        }),

        // add new service
        addService: builder.mutation({
            query: (body) => ({
                url: '/service',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    const { service } = result.data;
                    dispatch(apiSlice.util.updateQueryData('getServices', undefined, (draft) => {
                        draft.push(service);
                    }))
                } catch (err) {
                    // do nothing
                }
            }
        }),

        // delete service
        deleteService: builder.mutation({
            query: (id) => ({
                url: `/service/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                let patch = dispatch(apiSlice.util.updateQueryData('getServices', undefined, (draft) => {
                    let filteredServices = draft.filter(service => service._id != arg);
                    return filteredServices;
                }))

                try {
                    await queryFulfilled;
                } catch (err) {
                    patch.undo();
                }

            }
        }),

        // update the service
        updateService: builder.mutation({
            query: ({id, body}) => ({
                url: `/service/${id}`,
                method: 'PATCH',
                body
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    const { service } = result.data;

                    dispatch(apiSlice.util.updateQueryData('getServices', undefined, (draft) => {
                        let service = draft.find(service => service._id == arg.id);
                        service.name = arg.body.name;
                        service.price = arg.body.price;
                        service.description = arg.body.description;
                        service.features = arg.body.features;
                        service.isFeatured = arg.body.isFeatured;
                    }))

                } catch (err) {
                    // do nothing
                }
            }
        })
    })
})

export const { useGetServicesQuery, useGetServiceQuery, useAddServiceMutation, useDeleteServiceMutation, useUpdateServiceMutation } = serviceApi;