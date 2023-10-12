import styles from './Post.module.css'
import {useParams} from 'react-router-dom'
import {useGetPostByIdQuery} from '../../services/index'
import {useNavigate} from 'react-router-dom'

const Post = () => {
	const {id} = useParams()
	const navigate = useNavigate()
	const {data} = useGetPostByIdQuery(id)

	return (
		<>
			<button className={styles.backButton} onClick={() => navigate('/')}>
				<h2>Назад</h2>
			</button>
			<main className={styles.post}>
				{data && (
					<>
						<h3>ID: {data[0].id}</h3>
						<h3>UserID: {data[0].userId}</h3>
						<h3>Title: {data[0].title}</h3>
						<h3>Body: {data[0].body}</h3>
					</>
				)}
			</main>
		</>
	)
}

export default Post
