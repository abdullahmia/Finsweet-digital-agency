import { apiSlice } from "../api/apiSlice";


export const articleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get all articles with pagination
        getArticles: builder.query({
            query: ({ page, limit }) => ({
                url: `/article?page=${page}&limit=${limit}`,
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
                        let articles = draft.articles?.filter((article => article.slug !== arg.slug));
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
        }),
        // update article with slug
        updateArticle: builder.mutation({
            query: ({ id, body }) => ({
                url: `/article/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['ArticleCategory'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const { article } = result.data;
                    
                    // update the article cache data from all articles
                    dispatch(apiSlice.util.updateQueryData('getArticles', 1, (draft) => {
                        let cachedArticle = draft.articles.find((article) => article._id === arg.id);
                        cachedArticle.title = article.title;
                        cachedArticle.slug = article.slug;
                        cachedArticle.description = article.description;
                        cachedArticle.content = article.content;
                        cachedArticle.image = article.image;
                        cachedArticle.categories = article.categories;
                        cachedArticle.updatedAt = article.updatedAt;
                        cachedArticle.tags = article.tags;
                        cachedArticle.createdAt = article.createdAt;
                    }))

                } catch (err) {
                    // do nothing
                }
            }

        })
        
    })
})

export const { useCreateArticleMutation, useGetArticlesQuery, useDeleteArticleMutation, useGetArticleQuery, useUpdateArticleMutation } = articleApi;