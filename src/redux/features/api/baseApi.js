import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const baseApi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    tagTypes:["Tasks"],
    endpoints:(builder)=>({
        getTasks:builder.query({
            query:()=>'/tasks',
           providesTags:["Tasks"]
        }),
        updateStatus:builder.mutation({
            query:({id,data})=>({
                url:`tasks/${id}`,
                method:"PATCH",
                body:data
            }),
            invalidatesTags:['Tasks']
            
        }),
        createTask:builder.mutation({
            query:(data)=>({
                url:`/tasks`,
                method:"POST",
                body:data
            }),
            invalidatesTags:['Tasks']
            
        })
    })
})
export const {useGetTasksQuery,useUpdateStatusMutation,useCreateTaskMutation}= baseApi;
export default baseApi;