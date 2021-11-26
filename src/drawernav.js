import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import {Mapa} from './mapas/mapa';  
import TabNav from './tabnavigator'
import Info from './info'



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
                component={TabNav} />
  
              <Drawer.Screen
                name="Info"
                options={{ headerShown: false  }}
                component={Info} />

          </Drawer.Navigator>
    )}



    export default DrawerNav;