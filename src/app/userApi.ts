import { User } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => `users`,
        }),
    }),
});

export const { useGetAllUsersQuery } = userApi;
