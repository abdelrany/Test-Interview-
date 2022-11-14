import React from "react"

const Footer = () => {
	return (
		<footer className='min-h-32 flex w-full flex-col-reverse items-center justify-between bg-dark p-4 text-light md:flex-row'>
			<div className='flex flex-[.5] flex-col justify-center gap-8 sm:flex-row '>
				<ul className='mb-4 flex flex-col items-center gap-2'>
					<li className=''>
						<a href='/'>ACCEUIL</a>
					</li>
					<li className=''>
						<a href=''>A PROPOS</a>
					</li>
					<li className=''>
						<a href=''>NOS SERVICES</a>
					</li>
					<li className=''>
						<a href=''>ACUALITES</a>
					</li>
				</ul>
				<ul className='flex flex-col items-center gap-2'>
					<li className=''>
						<a href=''>ACCEUIL</a>
					</li>
					<li className=''>
						<a href=''>A PROPOS</a>
					</li>
					<li className=''>
						<a href=''>NOS SERVICES</a>
					</li>
				</ul>
			</div>
			<div className='mb-8 flex flex-[.5] flex-col-reverse justify-between gap-4 md:mb-0 md:flex-col'>
				<ul className='flex items-center'>
					<li className=''>
						<a href=''>NOS SERVICES</a>
					</li>
					<li className=''>
						<a href=''>NOS SERVICES</a>
					</li>
					<li className=''>
						<a href=''>NOS SERVICES</a>
					</li>
					<li className=''>
						<a href=''>NOS SERVICES</a>
					</li>
				</ul>
				<div className='flex h-24 w-full items-center justify-center rounded-lg bg-black text-light'>
					logo
				</div>
			</div>
		</footer>
	)
}

export default Footer
