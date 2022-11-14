import React from "react"
import { useFetchPartnersQuery } from "../features/partners/partners-api-slice"
import Loading from "./Loading"
import Row from "./Row"

type Props = {}

const Table = (props: Props) => {
	const { data = [], isLoading, isError } = useFetchPartnersQuery()

	if (isError) return <div>An error has occurred!</div>
	if (isLoading) return <Loading />

	return (
		<>
			<div className='relative overflow-x-auto'>
				<table className='w-full  space-y-6 text-left text-sm font-bold text-light'>
					<thead className='space-y-6  bg-gray-50 text-xs  text-cyan-400  '>
						<tr>
							<th></th>
							<th className='p-3 '>Prestataire</th>
							<th className='p-3 text-left'>Zone d'intergration</th>
							<th className='p-3 text-left'>Telephone</th>
							<th className='p-3 text-left'>Email</th>
							<th className='p-3 text-center'>disponibilte</th>
						</tr>
					</thead>
					<tbody className='flex-1 sm:flex-none'>
						{data.map((partner) => {
							return <Row partner={partner} />
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default Table
