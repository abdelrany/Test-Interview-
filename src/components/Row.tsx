import { CalendarIcon } from "@heroicons/react/24/outline"
import React from "react"
import { useFetchPartnersQuery } from "../features/partners/partners-api-slice"

type Props = {}

const Row = (props: Props) => {
	return (
		<div className='my-12 grid grid-cols-5 gap-2 rounded-lg border border-light p-2'>
			<div className='flex items-center justify-center gap-2'>
				<span className='h-8 w-8 rounded-full bg-secondary'></span>
				<p className='text-dark underline '>Justin Hertwitz</p>
			</div>
			<p className=''>75008 76372 647483</p>
			<p className=''>+33 45 86 45 06 </p>
			<p className=''>justinHertwitz@outlook.com </p>
			<div className='flex items-center justify-center gap-2'>
				<p className=''>
					<span className='h-4 w-4 rounded-full bg-green-600'></span>
					Disponible
				</p>
				<div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-secondary'>
					<CalendarIcon className='h-6 w-6 text-light' />
				</div>
			</div>
		</div>
	)
}

export default Row
