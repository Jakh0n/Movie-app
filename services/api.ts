export const TMBD_CONFIG = {
	BASE_URL: 'https://api.themoviedb.org/3',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
	},
}
export const fetchMovies = async ({ query }: { query: string }) => {
	const encodedQuery = encodeURIComponent(query)
	const endpoint = query
		? `discover/movie?query=${encodeURIComponent(query)}`
		: `discover/movie?sort_by=popularity.desc`
	const response = await fetch(endpoint, {
		method: 'GET',
		headers: TMBD_CONFIG.headers,
	})

	if (!response.ok) {
		throw new Error('Failed to fetch movies')
	}
	const data = await response.json()
	return data.results
}

// const url =
// 	'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1'
// const options = {
// 	method: 'GET',
// 	headers: {
// 		accept: 'application/json',
// 		Authorization:
// 			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmZlMTQ0MjRmMWZlNjQwY2YzZDNhZWJhYTRiOTk4OCIsIm5iZiI6MTcwOTg2Mjg3Ny4yMTYsInN1YiI6IjY1ZWE2ZmRkNjY3NTFkMDE4NmFjNzliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0o3juCQPdqVaZpyEDpTmQMXVYy4ZHny5sYEFn210B6o',
// 	},
// }

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error(err))
