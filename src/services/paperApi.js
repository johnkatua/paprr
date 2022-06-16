import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paperApi = createApi({
  reducerPath: "paperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
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
  }),
});

export const { usePapersQuery, useFacultiesQuery, useCoursesQuery } = paperApi;
