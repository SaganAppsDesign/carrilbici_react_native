import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Mapa} from './mapas/mapa';  
import CarrilBici from './carrilbici';  
import iconobici from '../assets/iconobici.png';  
import iconomapa from '../assets/iconomapa.png';  
import iconoinfo from '../assets/informacion.png';  
import Info from './info';



const Tab = createBottomTabNavigator()


function TabNav() {
  
    return (

      <Tab.Navigator
       
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'CarrilBici') {
                return  <Image
                    source={iconobici}
                    style={{width:35, height:35}}
                    />
            
            } else if (route.name === 'Info') {
                return <Image
                    source={iconoinfo}
                    style={{width:30, height:30}}
                    />
                   
            } else if (route.name === 'Mapa') {
                return <Image
                    source={iconomapa}
                    style={{width:30, height:30}}
                    />
                   
            }

            // You can return any component that you like here!
            return null 
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor:'#DFECF5'
        })}
      >
        <Tab.Screen name="CarrilBici" options={{ headerShown: false  }} component={CarrilBici} />
        <Tab.Screen name="Info" options={{ headerShown: false  }} component={Info} />
        <Tab.Screen name="Mapa" options={{ headerShown: false  }} component={Mapa} />
       
      </Tab.Navigator>

    )
}

export default TabNav;