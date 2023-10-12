import {useEffect, useMemo} from 'react'
import {useDebounce} from './useDebounce'
import {useDispatch} from 'react-redux'
import {addHundredPosts, setDisplayedIds} from '../slices/index'
import {useSelector} from 'react-redux'
import {useGetPost} from './useGetPost'

export function useScroll(postsRef) {
	const {posts, displayedIds} = useSelector(state => state.posts)
	const dispatch = useDispatch()
	const debounce = useDebounce()
	const [getPost] = useGetPost()
	const displayedIdsMemo = useMemo(() => displayedIds, [displayedIds[0], displayedIds[displayedIds.length - 1]])

	const scrollHandler = () => {
		const displayedIds = []
		postsRef.current.childNodes.forEach(el => {
			if (el.offsetTop > postsRef.current.scrollTop - 200 && el.offsetTop < postsRef.current.scrollTop + postsRef.current.offsetHeight + 200) displayedIds.push(+el.id)
		})
		dispatch(setDisplayedIds(displayedIds))

		if (postsRef.current.scrollTop + postsRef.current.offsetHeight >= postsRef.current.scrollHeight - postsRef.current.offsetHeight) {
			debounce(() => {
				dispatch(addHundredPosts())
			}, 100)
		}
	}

	useEffect(() => {
		scrollHandler()

		postsRef.current.addEventListener('scroll', scrollHandler)

		return () => {
			window.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	useEffect(() => {
		if (!displayedIdsMemo.length) return
		
		displayedIdsMemo.forEach(id => {
			if (!posts[id - 1].title) getPost(id)
		})
	}, [displayedIdsMemo])
}
