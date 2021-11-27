import React, {useState, useEffect} from 'react';
import { Text, View} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const TextoBienvenida = (propiedades) => {

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 1000)
    
      }, [])

    
    
    return (
    <View>
        <Text {...propiedades}  style={[ {fontSize:hp('5%'),  color: 'gray', textAlign:'center',  fontFamily:'Sarpanch-ExtraBold'}, propiedades.style]}>

            Carril bici Cádiz
          
        </Text>

         <Text style={{ fontSize:hp('3%'), color: 'gray', textAlign:'center', fontFamily:'Sarpanch-ExtraBold', paddingTop:hp('3%')}}>
                {activo ? propiedades.children : null}

        </Text>
        <View>
        
        </View>
    </View>
    )

}



export default TextoBienvenida;