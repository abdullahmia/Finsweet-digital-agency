import { apiSlice } from "../api/apiSlice";


export const commentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addComment: builder.mutation({
            query: ({body, slug}) => ({
                url: '/comment',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                const {name, email, body} = arg.body;
                let pathResult = dispatch(apiSlice.util.updateQueryData('getArticle', arg.slug, (draft) => {
                    draft.comments.unshift({name, email, body})
                }))

                try {
                    await queryFulfilled;
                } catch (err) {
                    pathResult.undo();
                }

            }
        }),
        getAllComments: builder.query({
            query: (page) => `/comment?page=${page}`,
        }),
    })
})


export const { useAddCommentMutation, useGetAllCommentsQuery } = commentApi;