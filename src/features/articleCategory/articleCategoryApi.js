import { apiSlice } from "../api/apiSlice";


export const articleCategoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getArticleCategory: builder.query({
            query: () => `/article/category`,
            providesTags: ['ArticleCategory'],
        }),
        createArticleCategory: builder.mutation({
            query: (body) => ({
                url: '/article/category',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    // category cash update pasimistically
                    const { data } = await queryFulfilled;
                    let category = data[0];

                    dispatch(apiSlice.util.updateQueryData('getArticleCategory', undefined, (draft) => {
                        draft.push(category);
                    }))

                } catch (err) {
                    // do nothing
                }
            }
        }),
        // delete article category
        deleteArticleCategory: builder.mutation({
            query: (id) => ({
                url: `/article/category/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                
                const patchResult = dispatch(apiSlice.util.updateQueryData('getArticleCategory', undefined, (draft) => {
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
        updateArticleCategory: builder.mutation({
            query: ({id, body}) => ({
                url: `/article/category/${id}`,
                method: 'PATCH',
                body
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const {id} = arg;
                    const result = await queryFulfilled;
                    const {category} = result.data;
                    dispatch(apiSlice.util.updateQueryData('getArticleCategory', undefined, (draft) => {
                        let draftCategory = draft.find((el) => el._id === id);
                        draftCategory.name = category.name;
                        draftCategory.slug = category.slug;
                    }))
                } catch (err) {
                    // do nothing
                }
            }
        })
    })
})

export const { useGetArticleCategoryQuery, useCreateArticleCategoryMutation, useDeleteArticleCategoryMutation, useUpdateArticleCategoryMutation } = articleCategoryApi;