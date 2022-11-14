import { CalendarIcon } from "@heroicons/react/24/outline"
import React, { FC } from "react"

type Props = { partner: any }

const Row: FC<Props> = ({ partner }) => {
	return (
		<tr className='rounded-lg border border-light  bg-background text-gray-900 duration-300 hover:bg-secondary hover:text-light'>
			<td className='whitespace-nowrap  px-6 py-4 text-sm font-light'>
				<img src={partner.avatar} className='h-8 w-8 rounded-full bg-black' />
			</td>
			<td className='whitespace-nowrap px-6 py-4 text-sm font-light underline'>
				{partner.name}
			</td>
			<td className='whitespace-nowrap  px-6 py-4 text-sm font-light'>
				{partner.lieux[0].code}
			</td>
			<td className='whitespace-nowrap  px-6 py-4 text-sm font-light'>
				{partner.telephone}
			</td>
			<td className='whitespace-nowrap  px-6 py-4 text-sm font-light'>
				{partner.email}
			</td>
			<td className='whitespace-nowrap  px-6 py-4 text-sm font-light'>
				<div className='flex items-center justify-center gap-6'>
					<span className='h-4 w-4 rounded-full  bg-danger'></span>
					{partner.disponible}

					<div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-secondary'>
						<CalendarIcon className='h-6 w-6  text-light' />
					</div>
				</div>
			</td>
		</tr>
	)
}

export default Row
