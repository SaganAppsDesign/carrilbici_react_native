import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class CarrilBici extends React.Component {

  constructor(props){
    super(props)
     
  
  }



 render() {

    

  return (


    <ImageOverlay 
          //source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>

                    <Image 
                        
                        source={logo}
                        style={{aspectRatio:2.5, width:wp('100%'), height:hp('15%'), marginBottom:hp('2%'), marginTop:hp('2%')}}
                                    
                        >    
                    </Image> 
                    
                </View>
       
           </View>


    </ImageOverlay> 

  )
}



}




