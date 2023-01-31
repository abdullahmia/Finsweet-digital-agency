import { apiSlice } from "../api/apiSlice";


export const projectCategoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjectCategory: builder.query({
            query: () => `/project/category`,
            providesTags: ['ProjectCategory'],
        }),
        createProjectCategory: builder.mutation({
            query: (body) => ({
                url: '/project/category',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    // category cash update pasimistically
                    const { data } = await queryFulfilled;
                    let category = data[0];

                    dispatch(apiSlice.util.updateQueryData('getProjectCategory', undefined, (draft) => {
                        draft.push(category);
                    }))

                } catch (err) {
                    // do nothing
                }
            }
        }),
        // delete article category
        deleteProjectCategory: builder.mutation({
            query: (id) => ({
                url: `/project/category/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {

                const patchResult = dispatch(apiSlice.util.updateQueryData('getProjectCategory', undefined, (draft) => {
                    return draft.filter((category) => category._id !== arg);
                }))

                try {
                    await queryFulfilled;

                } catch (err) {
                    patchResult.undo();
                }
            }
        }),
        // update article category
        updateProjectCategory: builder.mutation({
            query: ({ id, body }) => ({
                url: `/project/category/${id}`,
                method: 'PATCH',
                body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const { category } = result.data;
                    dispatch(apiSlice.util.updateQueryData('getProjectCategory', undefined, (draft) => {
                        let draftCategory = draft.find((el) => el._id === arg.id);
                        draftCategory.name = category.name;
                    }))
                } catch (err) {
                    // do nothing
                }
            }
        })
    })
})

export const { useCreateProjectCategoryMutation, useDeleteProjectCategoryMutation, useGetProjectCategoryQuery, useUpdateProjectCategoryMutation } = projectCategoryApi;