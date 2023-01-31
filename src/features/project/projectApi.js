import { apiSlice } from "../api/apiSlice";


export const projectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // get all projects
        getAllProjects: builder.query({
            query: () => `/project`,
        }),

        // create project
        createProject: builder.mutation({
            query: (body) => ({
                url: '/project',
                method: 'POST',
                body
            }),
        })
    })
})


export const {useGetAllProjectsQuery, useCreateProjectMutation } = projectApi;