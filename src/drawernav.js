import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import CarrilBici from './carrilbici';  
import {Mapa} from './mapas/mapa';  



const Drawer = createDrawerNavigator();


function DrawerNav() {
  
    return (
          <Drawer.Navigator
            //openByDefault={true}
            initialRouteName='Inicio' 
                  
            screenOptions={{
                        
            drawerStyle: {
              backgroundColor: 'white',
              width: 200,
            },

            headerTintColor:'#ffffff',

            headerStyle:{
              backgroundColor: 'black',
              }
          }}
                      
              >
              <Drawer.Screen
                name="Inicio"
                options={{ headerShown: false  }}
                component={CarrilBici} />
  
              <Drawer.Screen
                name="Mapa"
                options={{ headerShown: false  }}
                component={Mapa} />

          </Drawer.Navigator>
    )}



    export default DrawerNav;