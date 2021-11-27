import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import msg1 from '../assets/mensaje1.png'; 
import Logo from './logo'; 

const Info = (propiedades) => {

    console.log("propiedades Info", propiedades)

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 3000)
    
      }, [])

  return (
    <View style={{alignItem:'center',  width:wp('100%'), height:hp('100%'), flex:1}}>  
        
        <View style={{flex:0.1, marginTop:hp('3%')}}>  
          <Logo/>
        </View>
         
        <View style={{width:wp('100%'), height:hp('100%'),flex:0.3}}>  
          <Image
           resizeMode='contain'
            style={{aspectRatio:1.2, width:wp('60%'), height:hp('50%'), marginBottom:hp('0%'), marginTop:hp('0%')}}
            source={msg1}
          />
       </View>
       <View style={{width:wp('100%'), height:hp('100%'),flex:0.3, marginBottom:hp('20%'), marginTop:hp('10%')}}>  
          <Image
            resizeMode='contain'
            style={{aspectRatio:1.2, width:wp('60%'), height:hp('50%'), marginBottom:hp('0%'), marginTop:hp('0%')}}
            source={msg1}
          />
       </View>
     
      
    
    
    
    </View>
    




  )

}


  export default Info;