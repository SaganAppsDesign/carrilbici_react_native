import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './drawernav'; 
import {SplashScreen} from './splashscreen';  
import TabNav from './tabnavigator';  
import Usuario from './usuario';  
import CarrilBici from './carrilbici';  



function StackNav() {

    const Stack = createStackNavigator();
  
    return (

        <Stack.Navigator initialRouteName="SplashScreen"
            
            screenOptions={{
            //headerLeft: null,
            headerStyle: {
            backgroundColor: 'orange',
            },
            headerTintColor: '#000',
            
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            
            topBar: {
            
            hideBackButtonTitle: true,
            backgroundColor: 'orange',
            backButton: {
                showTitle:false
            }
            }
        }}>

        
        <Stack.Screen options={{headerShown: false}}  name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen options={{headerShown: false}}  name="Usuario" component={Usuario}/>
        <Stack.Screen options={{headerShown: false}}  name="DrawerNav" component={DrawerNav}/>
        <Stack.Screen options={{headerShown: false}}  name="TabNav" component={TabNav}/>
        <Stack.Screen options={{headerShown: false}}  name="CarrilBici" component={CarrilBici}/>
       

        
 
  
</Stack.Navigator>


)}


export default StackNav;