import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './drawernav'; 
import {SplashScreen} from './splashscreen';  



function StackNav() {

    const Stack = createStackNavigator();
  
    return (

        <Stack.Navigator
            
            screenOptions={{
            //headerLeft: null,
            headerStyle: {
            backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            
            topBar: {
            
            hideBackButtonTitle: true,
            backButton: {
                showTitle:false
            }
            }
        }}>

        
        <Stack.Screen options={{headerShown: false}}  name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen options={{headerShown: false}}  name="DrawerNav" component={DrawerNav}/>
 
  
</Stack.Navigator>


)}


export default StackNav;