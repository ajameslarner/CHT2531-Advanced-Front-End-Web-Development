import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Headers Variable
const coinsApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': ''
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
            query: (CoinUnique) => createRequest(`/coin/${CoinUnique}`),
        }),
        GetCoinHistory: builder.query({
            query: ({CoinUnique, timePeriod }) => createRequest(`coin/${CoinUnique}/history?timePeriod=${timePeriod}`),
        })
    })
});

export const {
    useGetCoinsQuery,
    useGetCoinDetailsQuery,
    useGetCoinHistoryQuery
} = CoinAPI;
