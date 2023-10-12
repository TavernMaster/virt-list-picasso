import {useEffect, useRef, useState} from 'react'
import styles from './Posts.module.css'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useScroll} from '../../hooks/useScroll'

const Posts = () => {
	const postsRef = useRef()
	useScroll(postsRef)
	const {posts} = useSelector(state => state.posts)

	return (
		<>
			<h3 className={styles.title}>Посты</h3>
			<section ref={postsRef} className={styles.posts}>
				{posts.map(post => (
					<PostLi key={post.id} {...post} />
				))}
			</section>
		</>
	)
}

const PostLi = ({id, title, body}) => {
	const navigate = useNavigate()
	const textRef = useRef()
	const postLiRef = useRef()
	const [isLargeText, setIsLargeText] = useState()

	useEffect(() => {
		if (postLiRef.current?.offsetWidth <= textRef.current?.offsetWidth + 50) setIsLargeText(true)
	}, [postLiRef.current, textRef.current, title, body])

	return (
		<main id={id} ref={postLiRef} className={styles.postLi}>
			{id && title ? <p ref={textRef}>{`${id}, ${title}, ${body}`}</p> : <div className={styles.skeleton}/>}
			<button className={`${isLargeText ? styles.aboutButtonShow : styles.aboutButtonHide}`} onClick={() => navigate(`/post/${id}`)}>
				Просмотр
			</button>
		</main>
	)
}

export default Posts
