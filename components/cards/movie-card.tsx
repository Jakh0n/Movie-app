import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({
	id,
	title,
	poster_path,
	vote_average,
	release_date,
}: Movie) => {
	return (
		<Link href={`/movies/${id}`} asChild>
			<TouchableOpacity className='w-[30%]'>
				<Image
					source={{
						uri: poster_path
							? `https://image.tmdb.org/t/p/w500${poster_path}`
							: 'https://placehold.co/600x400/1a1a1a/FFFFFF.png',
					}}
					className='w-full h-52 rounded-lg'
					resizeMode='cover'
				/>
				<Text className='text-white text-sm line-clamp-1 mt-2'>{title}</Text>
				<View className='flex-row items-center justify-start'>
					<Image
						source={icons.star}
						className='size-5'
						resizeMode='contain'
						tintColor='#ab8bff'
					/>
					<Text className='text-white text-sm ml-2'>
						{Math.round(vote_average * 10) / 10}
					</Text>
				</View>
				<Text className='text-white text-sm mt-2'>
					{release_date.split('-')[0]}
				</Text>
			</TouchableOpacity>
		</Link>
	)
}

export default MovieCard
