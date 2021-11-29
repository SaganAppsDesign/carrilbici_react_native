import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import Logo from './logo'; 
import foto1 from '../assets/carrilbici2.jpg'; 
import foto2 from '../assets/puentepepa.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const CarrilBici = (propiedades) => {

    //console.log(propiedades)

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 2000)
    
      }, [])

  return (

                                 
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1}}>  
         
                                 
            <ScrollView style={{width:wp('100%')}}> 
                <View style={{alignItems: 'center', flexDirection:'column',flex:1, width:wp('100%'), height:hp('22%')}}>
                    <ImageBackground 
                        
                        source={foto2}
                        //resizeMode={'stretch'}
                        style={{width:wp('100%'), height:hp('20%'), marginBottom:hp('0%'), marginTop:hp('3%'), opacity:1, flex:1}}
                                    
                        >
                            <View style={{justifyContent:'center',alignItems: 'center', flexDirection:'row', flex:1, width:wp('100%'), height:hp('10%'), marginTop:hp('3%')}}>                                                                 
                                {activo ?
                                <Logo style={{width:wp('40%'), height:hp('8%'), marginBottom:hp('10%'), marginTop:hp('10%'), marginLeft:wp('0%') , alignItems:'center'}}/> 
                                :null} 
                            </View>                      
                                   
                    </ImageBackground > 
                </View>
                <View style={{justifyContent:'center',alignItems: 'center', flexDirection:'row', flex:1, width:wp('100%'), height:hp('10%'), marginTop:hp('3%')}}>
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
                    <View style={{justifyContent:'center',alignItems: 'center', flexDirection:'row', flex:1, width:wp('100%'), height:hp('50%'), marginTop:hp('3%')}}>
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


