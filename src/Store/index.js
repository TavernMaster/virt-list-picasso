import {configureStore} from '@reduxjs/toolkit'
import posts from '../Posts/slices/'
import {postsApi} from '../Posts/services/index'

export default configureStore({
	reducer: {posts, [postsApi.reducerPath]: postsApi.reducer},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
	devTools: process.env.NODE_ENV == 'development' ? true : false,
})
