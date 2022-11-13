import { CalendarIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useFetchPartnersQuery } from "./features/partners/partners-api-slice"
import PartnerItem from "./components/PartnerItem"
function PartnerPage() {
	const {
		data = [],
		isLoading,
		isFetching,
		isError,
		error,
	} = useFetchPartnersQuery()
	//const { data, isLoading, isFetching, isError } = useFetchPartnersQuery()
	console.log("error :" + error)
	console.log("data  :" + data)

	if (isError) return <div>An error has occurred!</div>
	if (isLoading) return <div>Loading ....</div>

	return (
		<>
			<div className='relative overflow-x-auto'>
				<table className='w-full text-left text-sm text-light'>
					<thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th></th>
							<th scope='col' className='py-3 px-6 '>
								Prestataire
							</th>
							<th scope='col' className='py-3 px-6'>
								Zone d'intergration
							</th>
							<th scope='col' className='py-3 px-6'>
								Telephone
							</th>
							<th scope='col' className='py-3 px-6'>
								Email
							</th>
							<th scope='col' className='py-3 px-6'>
								disponibilte
							</th>
						</tr>
					</thead>
					<tbody>
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
