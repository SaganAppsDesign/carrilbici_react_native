import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/carrilbici.png'; 
import TextoBienvenida from './textobienvenida'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export class SplashScreen extends React.Component {

  constructor(props){
    super(props)
    
      setTimeout(()=>{
    
        this.props.navigation.navigate('Usuario')
  
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
                        
                <TextoBienvenida style={{color:'gray'}}>
                  Una alternativa ecológica...
                </TextoBienvenida>
                         
          <View style={{alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>
                   
                    
         </View>
       
       </View>


    </ImageOverlay> 

  )
}



}


