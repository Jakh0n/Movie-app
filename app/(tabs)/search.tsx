import MovieCard from '@/components/cards/movie-card'
import SearchBar from '@/components/shared/search-bar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const {
		data: movies,
		loading,
		error,
		fetchData: loadMovies,
		reset,
	} = useFetch(() => fetchMovies({ query: searchQuery }), false)
	useEffect(() => {
		const timeoutId = setTimeout(async () => {
			if (searchQuery.trim()) {
				await loadMovies()
			} else {
				reset()
			}
		}, 500)

		return () => clearTimeout(timeoutId)
	}, [searchQuery])
	return (
		<View className='flex-1 bg-primary'>
			<Image source={images.bg} className='w-full absolute z-0 ' />

			<FlatList
				className='px-5'
				data={movies}
				renderItem={({ item }) => <MovieCard {...item} />}
				keyExtractor={item => item.id.toString()}
				numColumns={3}
				ListHeaderComponent={
					<>
						<Image source={icons.logo} className='mt-20 mb-5 mx-auto w-12' />
						<View className='my-5'>
							<SearchBar
								placeholder='Search for a movie'
								onChangeText={(text: string) => setSearchQuery(text)}
								value={searchQuery}
							/>
						</View>
						{loading && (
							<ActivityIndicator size='large' className='self-center mt-10' />
						)}
						{error && (
							<Text className='text-white text-center'>
								Error: {error.message}
							</Text>
						)}
						{!loading &&
							!error &&
							searchQuery.trim() &&
							movies?.length! > 0 && (
								<Text className='text-xl text-white font-bold mb-4'>
									Search Results for{' '}
									<Text className='text-accent'>{searchQuery}</Text>
								</Text>
							)}
						{!loading &&
							!error &&
							searchQuery.trim() &&
							movies?.length === 0 && (
								<Text className='text-white text-center text-lg mt-10'>
									No movies found for &quot;{searchQuery}&quot;
								</Text>
							)}
						{!searchQuery.trim() && (
							<Text className='text-white text-center text-lg mt-10'>
								Start typing to search for movies
							</Text>
						)}
					</>
				}
				columnWrapperStyle={{
					justifyContent: 'flex-start',
					gap: 20,
					paddingRight: 5,
				}}
			/>
		</View>
	)
}

export default Search
