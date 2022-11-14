import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const urlTomoes = "https://tomoes.com/"

//the data we going to use
// interface Partner {
// 	id: string
// 	name: string
// 	avatar: string
// 	email: string
// 	telephone: string
// 	disponible: string
// 	lieux: {
// 		zone: string
// 		code: string
// 	}
// }
export type Partner = {
	data: PartnerData[]
	lieux: PartnerLieux[]
}

export type PartnerData = {
	data: {
		name: string
		avatar: string
		email: string
		telephone: string
		disponible: string
	}
}

export type PartnerLieux = {
	lieux: { zone: string; code: string }
}

export const apiSlice = createApi({
	reducerPath: "apiSlice",
	baseQuery: fetchBaseQuery({
		//The Url link
		baseUrl: urlTomoes,
	}),

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
