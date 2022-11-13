import React from "react"

type Props = {
	title: string
	span?: string | number
}

const Button = ({ title, span }: Props) => {
	return (
		<button className='flex w-full  items-center justify-center gap-1 rounded-lg border border-secondary py-3 text-sm text-light duration-300 hover:bg-secondary'>
			{title}
			{span && (
				<span className='flex h-5 w-5 items-center justify-center rounded-full bg-light text-sm text-dark '>
					{span}
				</span>
			)}
		</button>
	)
}

export default Button
