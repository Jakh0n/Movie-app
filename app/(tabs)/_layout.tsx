import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { ImageBackground } from 'expo-image'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<>
							<ImageBackground
								source={images.highlight}
								className='flex flex-row items-center justify-center flex-1 min-w-[112px] min-h-14 p-2 mt-4 rounded-full overflow-hidden'
							>
								<Image source={icons.home} className='w-5 h-5' />
							</ImageBackground>
						</>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{ title: 'Search', headerShown: false }}
			/>
			<Tabs.Screen
				name='save'
				options={{ title: 'Save', headerShown: false }}
			/>
			<Tabs.Screen
				name='profile'
				options={{ title: 'Profile', headerShown: false }}
			/>
		</Tabs>
	)
}

export default TabsLayout
