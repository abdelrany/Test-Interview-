import React, { FC } from "react"
import Sidebar from "./Sidebar"
import SiNavbardebar from "./Navbar"
import List from "./List"
import Footer from "./Footer"
import Navbar from "./Navbar"

type Props = {}

const Main: FC<Props> = ({ children }) => {
	return (
		<main className='flex min-h-screen flex-col bg-background md:flex-row'>
			<Sidebar />
			<div className='flex-1 bg-background'>
				<Navbar />
				<List />
				<Footer />
			</div>
		</main>
	)
}

export default Main
