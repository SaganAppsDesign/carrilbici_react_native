    
import {View,TouchableOpacity, Text } from 'react-native'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; 
import * as React from 'react';        
          
function Botones() {
  
    return (         
          

<View style={{alignItems:'center', flex:0.06,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%'), backgroundColor:'black'}}>  

        <View  style={{alignItems:'center', flex:1,  justifyContent:'center', borderColor:'white', borderWidth: 1}}>
            <TouchableOpacity 
                                                                            
                onPress={() => satelite()}
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

        <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:1, borderColor:'white', borderWidth: 1}}>
            <TouchableOpacity 
                                                                        
                    onPress={() => dark()}
                > 

                    <Text style={{color: '#E53D18',
                    backgroundColor: 'black',
                    fontSize: hp('2.5%'),
                    marginBottom: hp('0.5%'),
                    fontWeight: 'bold',
                    padding: hp('0.5%'),
                    textAlign: 'center',
                    
                    
                        }}>Dark</Text>
                                                        
            </TouchableOpacity> 

        </View>



        <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:1,  borderColor:'white', borderWidth: 1}}>
        
            <TouchableOpacity 
                                                                        
                onPress={() => street()}
                > 
                                    
                
                    <Text style={{color: '#E53D18',
                    backgroundColor: 'black',
                    fontSize: hp('2.5%'),
                    marginBottom: hp('0.5%'),
                    fontWeight: 'bold',
                    padding: hp('0.5%'),
                    textAlign: 'center',
                    
                    
                        }}>Street</Text>

                            
            </TouchableOpacity> 

        </View>

                    

            </View>
            
           
)}

export default Botones