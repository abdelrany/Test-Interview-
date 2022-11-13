import { CalendarIcon } from "@heroicons/react/24/outline"
import React, { FC } from "react"
interface Props {
	partner: any
}

const PartnerItem: FC<Props> = ({ partner }) => {
	// const parObjet = partner.lieux.map(([code]) => {
	// 	return { code }
	// })
	// console.log("this is code " + parObjet)

	return (
		<>
			<tr className='my-12 gap-2 rounded-lg border border-light bg-white  hover:bg-secondary '>
				<th
					scope='row'
					className='flex items-center whitespace-nowrap py-4 px-6 text-gray-900 dark:text-white'>
					<img
						className='h-8 w-8 rounded-full bg-secondary'
						src={partner.avatar}
					/>
				</th>
				<td className='py-4 px-6 text-dark underline'>{partner.name}r</td>
				<td className='py-4 px-6 text-dark '>{partner.lieux[0].code}</td>
				<td className='py-4 px-6 text-dark '>{partner.telephone}</td>
				<td className='py-4 px-6 text-dark'>{partner.email}</td>
				<td className='py-4 px-6 text-dark'>
					<div className='flex items-center justify-center gap-6'>
						<span className='mr-2" h-2.5 w-2.5 rounded-full bg-green-400'></span>
						{partner.disponible}

						<div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-secondary'>
							<CalendarIcon className='h-6 w-6 text-light' />
						</div>
					</div>
				</td>
			</tr>
		</>
	)
}

export default PartnerItem
