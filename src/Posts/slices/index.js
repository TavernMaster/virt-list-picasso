import {createSlice} from '@reduxjs/toolkit'

let counter = 0
let array = new Array(100).fill({}).map(() => {
	return {id: ++counter}
})

const posts = createSlice({
	name: 'posts',
	initialState: {
		posts: array,
		displayedIds: [],
	},
	reducers: {
		addPost(state, action) {
			if (!action.payload) return
			if (!state.displayedIds.includes(action.payload.id)) return

			state.posts[action.payload.id - 1] = action.payload

			const posts = state.posts.slice(0, state.posts.length)
			state.posts = array.slice(0, array.length)
			
			state.displayedIds.forEach(id => {
				state.posts[id - 1] = posts[id - 1]
			})
		},
		setDisplayedIds(state, action) {
			state.displayedIds = action.payload
		},
		addHundredPosts(state) {
			const nextArray = new Array(100).fill({}).map(() => {
				return {id: ++counter}
			})
			array = array.concat(nextArray)
			state.posts = state.posts.concat(nextArray)
		},
	},
})

export default posts.reducer

export const {addPost, setDisplayedIds, addHundredPosts} = posts.actions
