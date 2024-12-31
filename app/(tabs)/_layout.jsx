import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'

import {Ionicons} from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}} >
        
        <Tabs.Screen name="index"
        options={{
            tabBarLabel: 'Home',
            tabBarIcon:({color,size})=>
                 <Ionicons name="home" color={color} size={24}/>
        }}
        />
        <Tabs.Screen name="AddNew"
        options={{
            tabBarLabel:'AddNew',
            tabBarIcon:({color,size})=><Ionicons name='add-circle-outline' color={color}size={30}/>
        }}/>
        <Tabs.Screen name="Profile"
        options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color, size})=> <Ionicons name='person-circle-outline' size={24} color={color}/>
        }}/>
    </Tabs>
  )
}
