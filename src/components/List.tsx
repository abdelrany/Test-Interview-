import {
	AdjustmentsHorizontalIcon,
	MagnifyingGlassIcon,
	PlusIcon,
} from "@heroicons/react/24/outline"
import React from "react"
import Table from "./Table"

type Props = {}
const List = (props: Props) => {
	return (
		<section className='min-h-screen w-full overflow-scroll bg-background px-2 py-8 '>
			<div className='mb-4 p-1 sm:p-2'>
				<h1 className='text-md mb-8 font-extrabold tracking-widest text-primary md:text-xl'>
					List de partenaires{" "}
					<span className='text-gray-400'>Demandes de partenariat</span>{" "}
				</h1>
				<div className='flex items-center justify-between'>
					<button className='text-md flex items-center gap-2 rounded-md bg-primary  p-2 text-light duration-300 hover:bg-secondary '>
						<PlusIcon className='h-6 w-6' /> Ajouter un partenaire
					</button>
					<div className='hidden items-center gap-1 sm:flex sm:gap-3'>
						<input
							type='search'
							placeholder='Les mots cle, Les Dates...'
							className='group w-32 rounded-lg border border-light bg-white p-1 outline-none focus:bg-secondary focus:text-light sm:w-64 sm:p-2'
						/>
						<MagnifyingGlassIcon className='z-10 -ml-10 h-4 w-4 text-light sm:h-6 sm:w-6' />
						<AdjustmentsHorizontalIcon className='h-8 w-8 cursor-pointer text-gray-400' />
					</div>
				</div>
			</div>
			<Table />
		</section>
	)
}
export default List
