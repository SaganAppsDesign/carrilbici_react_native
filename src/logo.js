import React from 'react';
import logo from '../assets/logo.png'; 
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Logo = (props) => {


    return (

        <Image 
        {...props}                                
        source={logo}
        style={[ {width:wp('20%'), height:hp('4%'), marginBottom:hp('20%'), marginTop:hp('0%'), marginLeft:wp('70%') , alignItems:'center'}, props.style ]}
                    
        >    
       </Image> 
        )

}


export default Logo;
