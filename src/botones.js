    
import {View,TouchableOpacity, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; 
import * as React from 'react';        


function BotonSatelite({addstyle}) {
         
    return (    
        


        <View style={{alignItems:'center', flex:0.06,  justifyContent:'center', flexDirection:'column', marginBottom:hp('0%'),marginTop:hp('0%'), backgroundColor:'black', borderColor:'white', borderWidth: 1,width:wp('100%') }}>  
            
                    <TouchableOpacity 
                                                                                    
                        onPress={() => addstyle()}
                        > 
                                            
                            <Text style={{color: '#E53D18',
                            backgroundColor: 'black',
                            fontSize: hp('2.5%'),
                            marginBottom: hp('0.5%'),
                            fontWeight: 'bold',
                            padding: hp('0.5%'),
                            textAlign: 'center',
                            
                            
                                }}>Satelite</Text>

                                        
                    </TouchableOpacity> 
            
        </View>
            
           
)}

export default BotonSatelite