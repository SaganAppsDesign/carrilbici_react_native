import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/carrilbici.png'; 
import TextoBienvenida from './textobienvenida'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class SplashScreen extends React.Component {

  constructor(props){
    super(props)
    
 

      setTimeout(()=>{
    
        this.props.navigation.replace('DrawerNav')
  
      }, 2000)
  
  
  }



 render() {

    

  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column', paddingTop:hp('75%')}}>  
                        
                <TextoBienvenida>
                  Una alternativa ecológica...
                </TextoBienvenida>
                         
          <View style={{alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>

                      
                    
         </View>
       
       </View>


    </ImageOverlay> 

  )
}



}




const styles = StyleSheet.create({

 
  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  texto: {
    height: hp('8%'),
    marginBottom:'0%',
    width:wp('60%'),
    paddingHorizontal: '0%',
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
    paddingLeft: '10%'
   

  }
  

});