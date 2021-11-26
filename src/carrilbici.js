import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import foto1 from '../assets/carrilbici2.jpg'; 
import foto2 from '../assets/puentepepa.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const CarrilBici = (propiedades) => {

    //console.log(propiedades)

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 3000)
    
      }, [])

  return (

                                 
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
         
                                 
            <ScrollView style={{width:wp('100%')}}> 
                <View style={{textAlign:'center', alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>

                    

                    <ImageBackground 
                        
                        source={foto2}
                        //resizeMode={'stretch'}
                        style={{width:wp('100%'), height:hp('20%'), marginBottom:hp('0%'), marginTop:hp('0%'), opacity:1}}
                                    
                        >    

                                <Image 
                                    
                                    source={logo}
                                    style={{aspectRatio:2.5,  width:wp('50%'), height:hp('5%'), marginBottom:hp('1%'), marginTop:hp('5%'), marginLeft:wp('70%') , alignItems:'flex-start'}}
                                                
                                    >    
                                </Image> 
                                <Text style={{color:'black',  fontSize:20,  textAlign:'center', padding:hp('1%'), marginTop:hp('0%'),fontWeight: 'bold'}}>
                                {activo ?
                                        <Text style={{fontFamily:'Sarpanch-Black',   fontSize:30,  textAlign:'center', padding:hp('1%'), marginTop:hp('2%')}}>Carril bici Cádiz</Text >
                                :
                                        <Text style={{fontFamily:'Sarpanch-Black',   fontSize:30,  textAlign:'center', padding:hp('1%'), marginTop:hp('2%')}}>¿Qué tal ciclista?</Text>
                            
                                    }
                        
                                </Text>
                                
                    </ImageBackground > 
                    <Icon 
                        name="directions-bike"
                        reverse={true}
                        color={'green'}
                        size={hp('3%')}
                        type="MaterialIcons"
                        onPress={() => alert('Carril Bici Cádiz')}/>
                       

                    <Image 
                        
                        source={foto1}
                        resizeMode='contain'
                        style={{aspectRatio:1.0, width:wp('100%'), height:hp('50%'), marginBottom:hp('0%'), marginTop:hp('1%')}}
                                    
                        >    
                    </Image> 
                                       
                </View>
              
                

                </ScrollView>
           </View>
 
   

    
  )

} 



export default CarrilBici;


