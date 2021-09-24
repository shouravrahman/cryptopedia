import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': '614d9ce34amshc08603e2326e956p1503ddjsn4e1fedeb7e5e',
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url) => ({
	url,
	headers: cryptoNewsApiHeaders,
})

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: (newsCategory, count) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi
