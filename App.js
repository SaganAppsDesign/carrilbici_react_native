
import React from 'react';
import 'react-native-gesture-handler';
import {Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen} from './src/homescreen';  
import {SplashScreen} from './src/splashscreen';  
import {CarrilBici} from './src/carrilbici';  


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
console.disableYellowBox = true;


export class MainScreen extends React.Component {

 
 
  render(){ 

     
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


  )};
}

function DrawerNav() {
  
  return (
        <Drawer.Navigator
          
          screenOptions={{
          drawerStyle: {
            backgroundColor: 'white',
            width: 200,
          },
        }}
                    
            >
            <Drawer.Screen
              name="Carril Bici"
              options={{ drawerLabel: 'Mapbox' }}
              component={CarrilBici} />
            <Drawer.Screen
              name="Mapa"
              options={{ drawerLabel: 'Mapa' }}
              component={HomeScreen} />

        </Drawer.Navigator>
  )}


export default function App()  {
  return (

   <Fragment>

 
      <NavigationContainer>
        
         <MainScreen />

      </NavigationContainer>

    
    </Fragment>

   
  );
}




