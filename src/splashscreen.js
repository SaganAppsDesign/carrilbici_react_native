import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/carrilbici.png'; 


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class SplashScreen extends React.Component {

  constructor(props){
    super(props)
    
 

      setTimeout(()=>{
    
        this.props.navigation.replace('DrawerNav')
  
      }, 3000)
  
  
  }



 render() {

    

  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                         <Text>Carril Bici Cádiz</Text>

                         
          <View style={{alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>

                      
                    
         </View>
       
       </View>


    </ImageOverlay> 

  )
}



}




