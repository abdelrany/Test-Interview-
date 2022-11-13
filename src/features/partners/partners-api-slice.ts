import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const url = "https://jsonplaceholder.typicode.com/"
const urlTomoes = "https://tomoes.com/"

interface Partner {
	id: string
	name: string
	avatar: string
	email: string
	telephone: string
	disponible: string
	lieux: {
		zone: string
		code: string
	}
}

export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: urlTomoes,
		// mode: "no-cors",
	}),
	// noramla API
	// endpoints: (builder) => ({
	// 	fetchPartners: builder.query({
	// 		query: () => "data.json",
	// 	}),
	// }),

	// scond way of API
	endpoints(builder) {
		return {
			fetchPartners: builder.query<Partner[], number | void>({
				query() {
					//This after the URL comes
					return `data.json`
				},
			}),
		}
	},
})

export const { useFetchPartnersQuery } = apiSlice
