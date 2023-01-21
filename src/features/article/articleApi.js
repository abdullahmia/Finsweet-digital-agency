import { apiSlice } from "../api/apiSlice";


export const articleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get all articles with pagination
        getArticles: builder.query({
            query: (page) => ({
                url: `/article?page=${page}`,
                method: 'GET'
            }),
        }),
        createArticle: builder.mutation({
            query: (body) => ({
                url: '/article',
                method: 'POST',
                body
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}) {
                try {
                    const result = await queryFulfilled;
                    const {article} = result.data;
                    dispatch(apiSlice.util.updateQueryData('getArticles', 1, (draft) => {
                        draft.articles.unshift(article);
                    }))

                    // update categories total articles cache data if article has categories
                    // get the article categories from the arg
                    if (arg.categories.length > 0) {
                        arg.categories.forEach(category => {
                            // update category total articles cache data
                            dispatch(apiSlice.util.updateQueryData('getArticleCategory', undefined, (draft) => {
                                let categoryIndex = draft.findIndex((categoryItem) => categoryItem._id === category);
                                draft[categoryIndex].articles += 1;
                            }))
                        })
                    }

                    // if (article.categories.length > 0) {
                    //     console.log('article has categories', article.categories);
                    //     article.categories.forEach(category => {
                    //         // update category total articles cache data 
                    //         dispatch(apiSlice.util.updateQueryData('getArticleCategory', undefined, (draft) => {
                    //             let categoryIndex = draft.findIndex((categoryItem) => categoryItem._id === category);
                    //             draft[categoryIndex].articles += 1;
                    //         }
                    //         ))
                    //     })
                    // }
                    

                } catch (err) {
                    // do nothing
                }
            }
        }),
        deleteArticle: builder.mutation({
            query: ({ slug, currentPage}) => ({
                url: `/article/${slug}`,
                method: 'DELETE'
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const { article } = result.data;
                    dispatch(apiSlice.util.updateQueryData('getArticles', arg.currentPage, (draft) => {
                        let articles = draft.articles?.filter((article => article.slug != arg.slug));
                        return { ...draft, articles: articles };
                    }))

                    // update categories total articles cache data when article has been deleted
                    if (article.categories.length > 0) {
                        article.categories.forEach(category => {
                            // update category total articles cache data 
                            dispatch(apiSlice.util.updateQueryData('getArticleCategory', undefined, (draft) => {
                                let categoryIndex = draft.findIndex((categoryItem) => categoryItem._id === category);
                                draft[categoryIndex].articles -= 1;
                            }
                            ))
                        })
                    }
                    

                } catch (err) {
                    // do nothing
                }
            }
        }),
        getArticle: builder.query({
            query: (slug) => `/article/${slug}`
        })
        
    })
})

export const { useCreateArticleMutation, useGetArticlesQuery, useDeleteArticleMutation, useGetArticleQuery } = articleApi;