import React, { FC } from "react"
import Footer from "../../components/Footer"
import List from "../../components/List"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

type Props = {}

const Main: FC<Props> = ({ children }) => {
	return (
		<main className='flex min-h-screen flex-col bg-primary md:flex-row'>
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
