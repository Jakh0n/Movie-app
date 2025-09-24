export const TMBD_CONFIG = {
	BASE_URL: 'https://api.themoviedb.org/3',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
	},
}
export const fetchMovies = async ({ query }: { query: string }) => {
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
