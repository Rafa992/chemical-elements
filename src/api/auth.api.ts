import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login, LoginResponse, Register } from "../types/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    // baseUrl: "https://english-words-api-3l2i.onrender.com/api/",
    baseUrl: "http://localhost:4000/api/",
    // baseUrl: "/api/",
    // настройки добавления токена при запросах на энд-поинты не входящие в массив skipAuthEndpoints
    // prepareHeaders: (headers, {endpoint})=> {
    //     const skipAuthEndpoints = ["login", "register"];
    //     if(!skipAuthEndpoints.includes(endpoint)){
    //         const accessToken = getAccessToken();
    //         if(accessToken){
    //             headers.set("Authorization", `Bearer ${accessToken}`)
    //         }
    //     }
    // }
    }),
  endpoints: (builder) => ({
    register: builder.mutation<LoginResponse, Register>({
      query: (newUser) => ({
        url: "auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
    login: builder.mutation<LoginResponse, Login>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // profile: builder.query<LoginResponse, void>({
    //   query: () => ({
    //     url: "user/profile",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const { useRegisterMutation, useLoginMutation, /*useProfileQuery*/ } = authApi;
