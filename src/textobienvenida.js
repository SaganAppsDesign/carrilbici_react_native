import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const TextoBienvenida = (propiedades) => {

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 2000)
    
      }, [])

    
    
    return (
    <View>
        <Text style={{ fontSize:hp('5%'), fontWeight:'bold', color: 'gray', textAlign:'center',  fontFamily:'ComforterBrush-Regular'}}>

            Carril bici Cádiz
          
        </Text>

         <Text style={{ fontSize:hp('3%'), fontWeight:'bold', color: 'gray', textAlign:'center', fontFamily:'ComforterBrush-Regular', paddingTop:hp('3%')}}>
                {activo ? propiedades.children : null}

        </Text>
        <View>
        
        </View>
    </View>
    )

}



export default TextoBienvenida;