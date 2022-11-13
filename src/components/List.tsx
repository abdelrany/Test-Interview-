import { PlusIcon } from "@heroicons/react/24/outline"
import React from "react"
import PartnerPage from "../Partner-page"
import Row from "./Row"

type Props = {}

const List = (props: Props) => {
	return (
		<section className='min-h-screen w-full p-2'>
			<div className=''>
				<h1 className='text-dark'>
					List de partenaires{" "}
					<span className='text-gray-600'>Demandes de partenariat</span>{" "}
				</h1>
				<div className='flex items-center justify-between'>
					<button className='flex items-center gap-2 rounded-md bg-primary py-2 px-4 text-light '>
						{" "}
						<PlusIcon className='h-6 w-6' /> Ajouter un partenaire{" "}
					</button>
				</div>
			</div>
			<PartnerPage />
		</section>
	)
}
export default List
