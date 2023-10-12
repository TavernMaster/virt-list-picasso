import {useDispatch} from 'react-redux'
import {useLazyGetPostByIdQuery} from '../services/index'
import {addPost} from '../slices/index'

export function useGetPost() {
	const [refetch] = useLazyGetPostByIdQuery()
	const dispatch = useDispatch()

	async function getPost(id) {
		const {data} = await refetch(id)

		dispatch(addPost({...data[0], id: id})) // Подделываю ID, если он больше 100
	}

	return [getPost]
}
