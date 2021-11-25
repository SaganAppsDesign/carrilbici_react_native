import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import logo from '../assets/logo.png'; 
import foto1 from '../assets/carrilbici2.jpg'; 
import foto2 from '../assets/puentepepa.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CarrilBici = () => {

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 3000)
    
      }, [])

  return (

    <ScrollView style={{width:wp('100%')}}> 

                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                                                        
                
                <View style={{textAlign:'center', alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>

                    

                    <ImageBackground 
                        
                        source={foto2}
                        //resizeMode={'stretch'}
                        style={{width:wp('100%'), height:hp('20%'), marginBottom:hp('0%'), marginTop:hp('0%'), opacity:1}}
                                    
                        >    

                    <Image 
                        
                        source={logo}
                        style={{aspectRatio:2.5, width:wp('50%'), height:hp('5%'), marginBottom:hp('1%'), marginTop:hp('2%'), marginLeft:wp('75%') , alignItems:'flex-start'}}
                                    
                        >    
                    </Image> 
                                <Text style={{opacity:0.7, backgroundColor:'gray' , fontSize:hp('3%'), fontWeight:'bold', color: 'black', textAlign:'center', fontFamily:'courier', padding:hp('1%'), marginTop:hp('0%')}}>
                                {activo ?
                                        <Text>Bienvenidos a la APP Carril bici Cádiz</Text>
                                :
                                        <Text>¿Qué tal ciclista?</Text>
                            
                                    }
                        
                                </Text>
                    </ImageBackground > 

                    <Image 
                        
                        source={foto1}
                        resizeMode='contain'
                        style={{aspectRatio:1.0, width:wp('100%'), height:hp('50%'), marginBottom:hp('0%'), marginTop:hp('5%')}}
                                    
                        >    
                    </Image> 
                                       
                </View>
              
                

       
           </View>
 
    </ScrollView>
  )

} 

export default CarrilBici;


