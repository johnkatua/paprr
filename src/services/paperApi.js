import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const paperApi = createApi({
  reducerPath: "paperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hidden-beyond-78154.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    papers: builder.query({
      query: () => "/paper",
    }),
    faculties: builder.query({
      query: () => "/faculty",
    }),
    courses: builder.query({
      query: () => "/course",
    }),
    examsByCategory: builder.query({
      query: (id) => ({
        url: `/paper/${id}`,
        method: "GET",
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "signin",
        method: "POST",
        body
      })
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body
      })
    })
  }),
});

export const {
  usePapersQuery,
  useFacultiesQuery,
  useCoursesQuery,
  useExamsByCategoryQuery,
  useLoginUserMutation,
  useRegisterUserMutation
} = paperApi;
