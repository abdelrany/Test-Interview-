import { CalendarIcon } from "@heroicons/react/24/outline"
import React, { FC } from "react"
interface Props {
	partner: any
}

const PartnerItem: FC<Props> = ({ partner }) => {
	// const li = () => {
	// 	const tat = ""
	// 	for (let i = 0; i < partner.length; i++) {
	// 		for (let j = 0; j < partner.lieux[i].length; j++) {
	// 			console.log(partner[i][j])
	// 		}
	// 	}
	// }
	// console.log("data : " + partner.length)

	return (
		<>
			<tr className='flex-no wrap mb-2 flex-col gap-2 rounded-lg border border-light bg-background hover:bg-secondary sm:mb-0 sm:table-row '>
				<th
					scope='row'
					className='flex items-center whitespace-nowrap py-4 px-6  text-gray-900'>
					<img
						className='h-8 w-8 rounded-full bg-secondary text-center '
						src={partner.avatar}
					/>
				</th>
				<td className='py-4 px-6 text-center text-dark underline'>
					{partner.name}r
				</td>
				<td className='py-4 px-6 text-center text-dark'>
					{partner.lieux[0].zone}
				</td>
				<td className='py-4 px-6 text-center text-dark '>
					{partner.telephone}
				</td>
				<td className='py-4 px-6 text-center text-dark'>{partner.email}</td>
				<td className='py-4 px-6 text-center text-dark'>
					<div className='flex items-center justify-center gap-6'>
						<span className='mr-2" h-2.5 w-2.5 rounded-full bg-green-400 text-center'></span>
						{partner.disponible}

						<div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-secondary'>
							<CalendarIcon className='h-6 w-6  text-light' />
						</div>
					</div>
				</td>
			</tr>
		</>
	)
}

export default PartnerItem
