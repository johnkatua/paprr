import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
        method: "GET"
      })
    })
  }),
});

export const { usePapersQuery, useFacultiesQuery, useCoursesQuery, useExamsByCategoryQuery } = paperApi;
