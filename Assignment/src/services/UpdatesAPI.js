import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Headers Variable
const UpdatesApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '36114dc1e5msh316db3623e13926p15e5dbjsn705150139755'
}

//URL for the API 
const UpdatesApiUrl = 'https://bing-news-search1.p.rapidapi.com';

//
const createRequest = (url) => ({url, headers: UpdatesApiHeaders })

export const UpdatesAPI = createApi({
    reducerPath: 'UpdatesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: UpdatesApiUrl}),
    endpoints: (builder) => ({
        GetUpdates: builder.query({
            query: ( {UpdatesCategory, count} ) => createRequest(`/news/search?q=${UpdatesCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetUpdatesQuery,
} = UpdatesAPI;