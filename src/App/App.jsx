import {Route, Routes} from 'react-router-dom'
import styles from './App.module.css'
import Posts from '../Posts/components/Posts/Posts'
import Post from '../Posts/components/Post/Post'

function App() {
	return (
		<main className={styles.container}>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/post/:id" element={<Post />} />
			</Routes>
		</main>
	)
}

export default App
