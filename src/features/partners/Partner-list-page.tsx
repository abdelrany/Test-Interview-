import React from "react"
import { useFetchPartnersQuery } from "./partners-api-slice"
import PartnerItem from "./Partner-Item-page"
import Loading from "../../components/Loading"
function PartnerPage() {
	const { data = [], isLoading, isError } = useFetchPartnersQuery()

	if (isError) return <div>An error has occurred!</div>
	if (isLoading) return <Loading />

	return (
		<>
			<div className='relative overflow-x-auto'>
				<table className='w-full text-left text-sm text-light'>
					<thead className='space-y-6 bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th></th>
							<th className='p-3 '>Prestataire</th>
							<th className='p-3 text-left'>Zone d'intergration</th>
							<th className='p-3 text-left'>Telephone</th>
							<th className='p-3 text-left'>Email</th>
							<th className='p-3 text-left'>disponibilte</th>
						</tr>
					</thead>
					<tbody className='flex-1 sm:flex-none'>
						{data.map((partner) => {
							return <PartnerItem partner={partner} />
						})}
					</tbody>
				</table>
			</div>
		</>
	)
}
export default PartnerPage
