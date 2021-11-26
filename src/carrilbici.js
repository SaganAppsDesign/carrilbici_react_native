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

                                 
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%')}}>  
         
                                 
            <ScrollView style={{width:wp('100%')}}> 
                <View style={{textAlign:'center', alignItems: 'center', flexDirection:'column',flex:1, width:wp('100%'), height:hp('22%')}}>
                    <ImageBackground 
                        
                        source={foto2}
                        //resizeMode={'stretch'}
                        style={{width:wp('100%'), height:hp('20%'), marginBottom:hp('0%'), marginTop:hp('3%'), opacity:1, flex:1}}
                                    
                        >    
                               <Image 
                                    
                                    source={logo}
                                    style={{aspectRatio:2.5,  width:wp('50%'), height:hp('5%'), marginBottom:hp('1%'), marginTop:hp('5%'), marginLeft:wp('70%') , alignItems:'flex-start'}}
                                                
                                    >    
                                 </Image> 
                               
                                {activo ?
                                <Text style={{color:'black' ,fontFamily:'Sarpanch-Black',   fontSize:30,  textAlign:'center', padding:hp('1%'), marginTop:hp('0%')}}>Carril bici Cádiz</Text >
                                    :
                                <Text style={{color:'black', fontFamily:'Sarpanch-Black',   fontSize:30,  textAlign:'center', padding:hp('1%'), marginTop:hp('0%')}}>¿Qué tal ciclista?</Text>
                    
                                    }
                                                          
                    </ImageBackground > 
                </View>
                <View style={{alignItems: 'center', flexDirection:'row', flex:1, width:wp('100%'), height:hp('10%'), marginTop:hp('3%'), marginLeft:wp('28%')}}>
                        <Icon 
                            name="directions-bike"
                            reverse={true}
                            color={'green'}
                            size={hp('3%')}
                            type="MaterialIcons"
                            onPress={() => alert('Carril Bici Cádiz')}/>
                        <Icon 
                            name="directions-bike"
                            reverse={true}
                            color={'orange'}
                            size={hp('3%')}
                            type="MaterialIcons"
                            onPress={() => alert('Carril Bici Cádiz')}/>
                        <Icon 
                            name="directions-bike"
                            reverse={true}
                            color={'red'}
                            size={hp('3%')}
                            type="MaterialIcons"
                            onPress={() => alert('Carril Bici Cádiz')}/>
                    </View>
                    <View style={{alignItems: 'center', flexDirection:'row', flex:1, width:wp('100%'), height:hp('50%'), marginTop:hp('3%')}}>
                        <Image 
                            
                            source={foto1}
                            resizeMode='contain'
                            style={{aspectRatio:1.2, width:wp('100%'), height:hp('50%'), marginBottom:hp('0%'), marginTop:hp('0%')}}
                                        
                            >    
                        </Image> 
                    </View>                   
             
              
                

                </ScrollView>
           </View>
 
   

    
  )

} 



export default CarrilBici;


