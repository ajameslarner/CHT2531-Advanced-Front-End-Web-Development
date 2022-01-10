import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Headers Variable
const coinsApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '36114dc1e5msh316db3623e13926p15e5dbjsn705150139755'
}

//URL for the API 
const coinsApiUrl = 'https://coinranking1.p.rapidapi.com';

//
const createRequest = (url) => ({url, headers: coinsApiHeaders })

export const CoinAPI = createApi({
    reducerPath: 'CoinAPI',
    baseQuery: fetchBaseQuery({ baseUrl: coinsApiUrl}),
    endpoints: (builder) => ({
        GetCoins: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        GetCoinDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        GetCoinHistory: builder.query({
            query: ({coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
        })
    })
});

export const {
    useGetCoinsQuery,
    useGetCoinDetailsQuery,
    useGetCoinHistoryQuery
} = CoinAPI;