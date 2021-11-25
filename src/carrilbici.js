import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import foto1 from '../assets/carrilbici2.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CarrilBici = () => {

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 3000)
    
      }, [])

  return (


    <ImageOverlay 
          //source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                                                        
                          
                <View style={{textAlign:'center', alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>

                    <Image 
                        
                        source={logo}
                        style={{aspectRatio:2.5, width:wp('100%'), height:hp('15%'), marginBottom:hp('2%'), marginTop:hp('2%')}}
                                    
                        >    
                    </Image> 

                    <Text style={{ fontSize:hp('3%'), fontWeight:'bold', color: 'gray', textAlign:'center', fontFamily:'courier', padding:hp('2%')}}>
                        {activo ?
                                <Text>Bienvenidos a la APP Carril bici Cádiz</Text>
                        :
                                <Text>¿Qué tal ciclista?</Text>
                    
                            }
                
                    </Text>

                    <Image 
                        
                        source={foto1}
                        style={{aspectRatio:1.0, width:wp('100%'), height:hp('50%'), marginBottom:hp('2%'), marginTop:hp('2%')}}
                                    
                        >    
                    </Image> 
                                       
                </View>



       
           </View>


    </ImageOverlay> 

  )

} 

export default CarrilBici;


