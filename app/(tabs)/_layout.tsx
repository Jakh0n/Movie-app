import TabIcon from '@/components/shared/tab-icon'
import { icons } from '@/constants/icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					height: '100%',
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				},
				tabBarStyle: {
					backgroundColor: '#0F0D23',
					borderRadius: 50,
					marginHorizontal: 10,
					marginBottom: 36,
					height: 52,
					position: 'absolute',
					overflow: 'hidden',
					borderWidth: 1,
					borderColor: '#0F0D23',
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title={'Home'} icon={icons.home} />
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title={'Search'} icon={icons.search} />
					),
				}}
			/>
			<Tabs.Screen
				name='save'
				options={{
					title: 'Save',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title={'Save'} icon={icons.save} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} title={'Profile'} icon={icons.person} />
					),
				}}
			/>
		</Tabs>
	)
}

export default TabsLayout
