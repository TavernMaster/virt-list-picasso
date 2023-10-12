import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

function getFakeId(id) {
	if (id < 100) return id
	else id -= 100
	return getFakeId(id)
}

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
	endpoints: builder => ({
		getPostById: builder.query({
			query: id => ({
				url: `posts`,
				params: {
					_limit: 1,
					_start: getFakeId(id - 1),
				}
			}),
		}),
	}),
})

export const {useLazyGetPostByIdQuery, useGetPostByIdQuery} = postsApi
