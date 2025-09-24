import { images } from '@/constants/images'
import { TabIconProps } from '@/types'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({ focused, title, icon }: TabIconProps) => {
	if (focused) {
		return (
			<ImageBackground
				source={images.highlight}
				className='flex flex-row items-center justify-center flex-1 w-full min-h-16 mt-4 rounded-full overflow-hidden min-w-[112px]'
			>
				<Image source={icon} tintColor={'#151312'} className='size-5' />
				<Text className='text-secondary font-semibold ml-2 text-base'>
					{title}
				</Text>
			</ImageBackground>
		)
	}
	return (
		<View className='size-full items-center justify-center mt-4 rounded-full'>
			<Image source={icon} tintColor={'#A8B5DB'} className='size-5' />
		</View>
	)
}

export default TabIcon
