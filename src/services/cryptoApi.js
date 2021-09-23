import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '614d9ce34amshc08603e2326e956p1503ddjsn4e1fedeb7e5e',
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
	url,
	headers: cryptoApiHeaders,
})

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
})
export const { useGetCryptosQuery } = cryptoApi
