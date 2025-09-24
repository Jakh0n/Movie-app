import SearchBar from '@/components/shared/search-bar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

const Index = () => {
	const router = useRouter()
	return (
		<View className='flex-1 bg-primary'>
			<Image source={images.bg} className='w-full absolute z-0' />
			<ScrollView
				className='flex-1 px-5'
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
			>
				<Image source={icons.logo} className='mt-20 mb-5 mx-auto w-12' />
				<SearchBar
					placeholder='Search for a movie'
					onPress={() => router.push('/search')}
				/>
			</ScrollView>
		</View>
	)
}

export default Index
