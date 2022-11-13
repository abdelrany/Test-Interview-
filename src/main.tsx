import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from "./features/partners/partners-api-slice"

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApiProvider api={apiSlice}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ApiProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
