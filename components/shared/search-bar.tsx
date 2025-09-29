import { icons } from '@/constants/icons'
import React from 'react'
import { Image, TextInput, View } from 'react-native'

interface SearchBarProps {
	onPress?: () => void
	placeholder: string
	onChangeText?: (text: string) => void
	value?: string
}

const SearchBar = ({
	onPress,
	placeholder,
	value,
	onChangeText,
}: SearchBarProps) => {
	return (
		<View className='flex-row items-center justify-between bg-dark-200 rounded-full px-5 py-4'>
			<Image
				source={icons.search}
				className='size-5'
				resizeMode='contain'
				tintColor='#ab8bff'
			/>
			<TextInput
				className='flex-1 ml-2 text-white'
				placeholder={placeholder}
				placeholderTextColor='#a8b5db'
				onChangeText={onChangeText}
				onPress={onPress}
				value={value}
			/>
		</View>
	)
}

export default SearchBar
