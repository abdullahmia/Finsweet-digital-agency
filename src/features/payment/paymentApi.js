import { apiSlice } from "../api/apiSlice";


export const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        makePayment: builder.query({
            query: (serviceId) => `/make-payment/${serviceId}`
        })
    }),
});


export const { useMakePaymentQuery } = paymentApi;