import { BellIcon } from "@heroicons/react/24/outline"
import React from "react"

type Props = {}

const Navbar = (props: Props) => {
	return (
		<nav className='flex h-28 w-full flex-col bg-light'>
			<div className='flex w-full items-center justify-between bg-light p-4 md:h-28'>
				<div className=''>
					<h1 className='mb-4 text-2xl font-extrabold text-primary'>
						Bonjour, Ryan !{" "}
					</h1>
					<p className='text-gray-500'>
						Voici ce que ce passe sure votre compte aujourdhui !
					</p>
				</div>

				<div className='hidden items-center gap-4 md:flex '>
					<div className='relative hidden h-12 w-12 items-center justify-center rounded-full bg-primary md:flex'>
						<BellIcon className='h-6 w-6 cursor-pointer text-light ' />
						<span className='absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-sm '>
							4
						</span>
					</div>
					<span className=' h-12  w-12 cursor-pointer rounded-full bg-black'></span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
