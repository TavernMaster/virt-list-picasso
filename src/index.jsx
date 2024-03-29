import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux/es/exports.js'
import store from './Store'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
