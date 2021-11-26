import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import { Icon, Header } from 'react-native-elements';
import logo from '../assets/logo.png'; 
import foto1 from '../assets/carrilbici2.jpg'; 
import foto2 from '../assets/puentepepa.jpg'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Info = (propiedades) => {

    console.log("propiedades Info", propiedades)

    const [activo, setActivo] = useState(false)  

    useEffect(() =>{

        setTimeout(()=>{
            setActivo(true)
        }, 3000)
    
      }, [])

  return (

    <Text style={{color:'black',fontFamily:'Sarpanch-Medium',   fontSize:30,  textAlign:'center', padding:hp('1%'), marginTop:hp('10%')}}>Información sobre el carril bici.
       En construcción</Text >


    




  )

}


  export default Info;