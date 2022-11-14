import React, { useState } from "react"
import {
	ArrowLeftOnRectangleIcon,
	EllipsisHorizontalIcon,
	Bars3Icon,
	BellIcon,
	UserIcon,
} from "@heroicons/react/24/outline"
import Button from "./Button"

type Props = {}

const Sidebar = (props: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<aside
			className={`${
				isOpen ? "min-h-screen" : "h-20"
			} w-full overflow-hidden md:min-h-screen md:w-[240px]`}>
			{/* this will be rendered only in mobile/tablet breakpoint */}
			<div className='text-liht flex w-full items-center justify-between bg-primary p-4 md:hidden'>
				<span className=' h-12 w-12 cursor-pointer rounded-full bg-black'></span>
				<Bars3Icon
					onClick={() => setIsOpen(!isOpen)}
					className='h-6 w-6 cursor-pointer text-light'
				/>
				<div className='flex items-center gap-6'>
					<BellIcon className='h-6 w-6 cursor-pointer text-light' />
					<UserIcon className='h-6 w-6 cursor-pointer text-light' />
				</div>
			</div>
			{/* this is the main sidebar */}
			<div
				onClick={() => setIsOpen(false)}
				className='flex  h-full flex-col items-center bg-primary p-1'>
				<div className='flex h-24 w-full items-center justify-center rounded-lg bg-black text-light'>
					logo
				</div>
				{/* profil */}
				<div className='my-8 flex w-full flex-col gap-4'>
					<p className='text-secondary'>Profil</p>
					<div className='flex w-full items-center justify-between rounded-lg border border-secondary py-3 px-1'>
						<span className='h-8 w-8 rounded-full bg-light '></span>
						<p className='text-sm font-bold text-light'>Ryan Workman</p>
						<EllipsisHorizontalIcon className='h-5 w-5 cursor-pointer text-light/40 duration-300 hover:scale-110 hover:text-light' />
					</div>
					<button className='flex w-full items-center justify-around gap-4 rounded-lg border border-secondary py-3 px-2 text-sm text-light duration-300 hover:bg-secondary'>
						<ArrowLeftOnRectangleIcon className='ml-2 h-6 w-6  text-light' />
						Deconnexion
					</button>
				</div>
				{/* menu */}
				<div className='mb-4 flex w-full flex-col gap-3'>
					<p className='text-secondary'>Menu</p>
					<Button title='Tableau de bord' />
					<Button title='Demandes de service' span={4} />
					<Button title='Clients' />
					<Button title="Lieux d'interventions" />
					<Button title='Partenaires' />
					<Button title='Beneficiers' />
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
