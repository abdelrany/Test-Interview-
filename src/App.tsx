import React from "react"
import Footer from "./components/Footer"
import List from "./components/List"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import PartnerPage from "./Partner-page"
import { Routes, Route } from "react-router-dom"

const App = () => (
	<React.Fragment>
		<Main>
			<Routes>
				<Route path='/' element={<List />} />
				<Route path='/uu' element={<PartnerPage />} />
				<Route path='/navbar' element={<Navbar />} />
				<Route path='/foo' element={<Footer />} />
			</Routes>
		</Main>
	</React.Fragment>
)

export default App
