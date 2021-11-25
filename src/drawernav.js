import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import CarrilBici from './carrilbici';  
import {Mapa} from './mapa';  
import {MapaSat} from './mapaSatelite'; 
import { MapaDark } from './mapaDark';


const Drawer = createDrawerNavigator();


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
                name="Inicio"
                options={{ drawerLabel: 'Inicio' }}
                component={CarrilBici} />
  
              <Drawer.Screen
                name="Mapa Streets"
                options={{ drawerLabel: 'Mapa Street' }}
                component={Mapa} />
  
  { /*
              <Drawer.Screen
                name="Mapa Satélite"
                options={{ drawerLabel: 'Mapa Satélite' }}
                component={MapaSat} />
              <Drawer.Screen
                name="Mapa Dark"
                options={{ drawerLabel: 'Mapa Dark' }}
                component={MapaDark} />
  */}
          </Drawer.Navigator>
    )}



    export default DrawerNav;