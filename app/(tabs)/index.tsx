import MovieCard from '@/components/cards/movie-card'
import SearchBar from '@/components/shared/search-bar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { useRouter } from 'expo-router'
import React from 'react'
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
} from 'react-native'

const Index = () => {
	const router = useRouter()
	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
	} = useFetch(() => fetchMovies({ query: '' }), true)
	return (
		<View className='flex-1 bg-primary'>
			<Image source={images.bg} className='w-full absolute z-0' />
			<ScrollView
				className='flex-1 px-5'
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
			>
				<Image source={icons.logo} className='mt-20 mb-5 mx-auto w-12' />
				{moviesLoading ? (
					<ActivityIndicator size='large' className='self-center mt-10' />
				) : moviesError ? (
					<Text>Error: {moviesError.message}</Text>
				) : (
					<View className='flex-1 mt-5'>
						<SearchBar
							placeholder='Search for a movie'
							onPress={() => router.push('/search')}
						/>
						<Text className='text-white  font-bold mt-5 mb-3'>
							Latest Movies
						</Text>
						<FlatList
							data={movies}
							renderItem={({ item }) => (
								<>
									<MovieCard {...item} />
								</>
							)}
							keyExtractor={item => item.id.toString()}
							numColumns={3}
							columnWrapperStyle={{
								justifyContent: 'flex-start',
								gap: 20,
								paddingRight: 5,
								marginBottom: 10,
							}}
							className='mt-2 pb-32'
							scrollEnabled={false}
						/>
					</View>
				)}
			</ScrollView>
		</View>
	)
}

export default Index
