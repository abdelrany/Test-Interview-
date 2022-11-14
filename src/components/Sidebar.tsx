import React, { useState } from "react"
import {
	ArrowLeftOnRectangleIcon,
	EllipsisHorizontalIcon,
	Bars3Icon,
	BellIcon,
	UserIcon,
} from "@heroicons/react/24/outline"
import Button from "./Button"
import { Link } from "react-router-dom"

type Props = {}

const Sidebar = (props: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<aside
			className={`${
				isOpen ? "h-full transition-all duration-500 " : "h-20 "
			} overflow-hidden md:min-h-screen md:flex-[.32] lg:flex-[.25] xl:flex-[.15]`}>
			{/* this will be rendered only in mobile/tablet breakpoint */}
			<div className='text-liht flex w-full items-center justify-between  bg-primary p-4 md:hidden'>
				<span className=' h-12  w-12 cursor-pointer rounded-full bg-black'></span>
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
						<ArrowLeftOnRectangleIcon className='h-6 w-6 text-light' />
						Deconnexion
					</button>
				</div>
				{/* menu */}
				<div className='flex w-full flex-col gap-3'>
					<p className='text-secondary'>Menu</p>
					<Link to='/'>
						<Button title='Tableau de bord' />
					</Link>
					<Button title='Demandes de service' span={4} />
					<Button title='Clients' />
					<Button title="Lieux d'interventions" />
					<Link to='/partner'>
						<Button title='Partenaires' />
					</Link>
					<Button title='Beneficiers' />
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
