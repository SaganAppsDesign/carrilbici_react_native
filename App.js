
import * as React from 'react';
import 'react-native-gesture-handler';
import {Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './src/stacknavigator'; 


console.disableYellowBox = true;


export default function App()  {
  return (

 

 
      <NavigationContainer>
        
         <StackNav />

      </NavigationContainer>



   
  );
}




