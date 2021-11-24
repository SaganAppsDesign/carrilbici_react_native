import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import 'react-native-gesture-handler';
import logo from '../assets/habitant.png'; 
import sabermas from '../assets/saber_mas.png'; 
import { Linking } from 'react-native';
import json from '../assets/parking_bicis.json'; 
import json2 from '../assets/carrilbici.json'; 
import {
  PermissionsAndroid
} from 'react-native';




MapboxGL.setAccessToken('pk.eyJ1IjoiZGFyZW5hcyIsImEiOiJjazE5M3R2OHAwMXA2M2VudDY1MDhwbGZwIn0.O8jPIUaaENpa2YRuAta_wA');



for(let i = 0; i < json.features.length; i++){

  json.features[i].properties.localizacion

  if (json.features[i].properties.localizacion == undefined)
      json.features[i].properties.localizacion = "Estación bici"
      
  console.log(json.features[i].properties.localizacion)

}


export class HomeScreen extends React.Component {

  

  constructor (props) {
    super(props);
  
    this.state = {
      info: "informacion"
    };
  }

 
  render() {
   
    return (
     

      <View style={styles.page}>

         <View style={styles.container}>
       
                
            { /* LOGO
            
            <View style={{alignItems:'center', justifyContent:'center',flex:0.3}}>  
            
            <Image 
                
                source={logo}
                style={{aspectRatio:4.5, width:wp('100%'), height:hp('8%'), marginTop:hp('0%')}}
                
                >    
            </Image>  

            </View> 
*/}
          <MapboxGL.MapView 
               styleURL={MapboxGL.StyleURL.Street}
               style={styles.map}
               zoomEnabled={true} 
               scrollEnabled={true}
               pitchEnabled={true}
               rotateEnabled={true}
               compassEnabled={true}
               showUserLocation={true}
               onPress={(feature)=>console.log('Coords:', feature.geometry.coordinates)}
               
               >   
                              
          
                <MapboxGL.Camera
                    zoomLevel={12}
                    animationMode={'flyTo'}
                    animationDuration={7100}
                    centerCoordinate={[-6.277915972494583,  36.51663959573589 ]}

               
                />
                    
                <View>
                
                    <MapboxGL.UserLocation
                     visible={true}
                     showsUserHeadingIndicator={true}
                     animated={true}
                     />
                    
                    { /*json estaciones bici */}
                    <MapboxGL.ShapeSource 
                     
                     id="parkingbici"
                     cluster
                     clusterRadius={50}
                     shape={json}
                     
                     > 
                     <MapboxGL.SymbolLayer
                          id="pointCount"
                          style={styles.clusterCount}
                        />
                     <MapboxGL.CircleLayer
                        id="clusteredPoints"
                        belowLayerID="pointCount"
                        filter={['has', 'point_count']}
                        style={styles.clusteredPoints}
                      />
                       <MapboxGL.CircleLayer
                        id="singlePoint"
                        filter={['!', ['has', 'point_count']]}
                        style={styles.singlePoint}
                      />
                                            

                    </MapboxGL.ShapeSource>

                    { /*json carril bici */}
                    <MapboxGL.ShapeSource 
                     
                     id="carrilbici"
                     
                     shape={json2}
                     
                     > 
                     <MapboxGL.LineLayer
                          id="line"
                          style={styles.line}
                        />
                  
                                            

                    </MapboxGL.ShapeSource>

                </View>

          </MapboxGL.MapView>

          { /* LOGO
            
            <View style={{alignItems:'center', justifyContent:'center', flex:0.1, backgroundColor:'#00FBCE'}}>  
            <TouchableHighlight 
            onPress={() => Linking.openURL('https://habitant.es/')}>
                <Image 
                    
                    source={sabermas}
                    style={{aspectRatio:2.5, width:wp('100%'), height:hp('15%'), marginBottom:hp('2%')}}
                                
                    >    
                </Image>  
            </TouchableHighlight>
            </View> 
       
*/}
        </View>

      </View>
    )



    
  }

  componentDidMount() {
    
       PermissionsAndroid.requestMultiple(
          [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
             PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
          ], {
             title: 'Give Location Permission',
             message: 'App needs location permission to find your position.'
          }
       ).then(granted => {
          console.log(granted);
          resolve();
       }).catch(err => {
          console.warn(err);
          reject(err);
       });
    }

    

}





const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  container: {
    height:hp('89%'),
    width: wp('97%'),
    backgroundColor: 'white'
  },
  map: {
    flex: 1
  },
  line: {
    color:'green',
    backgroundColor:'white'
  },
  clusteredPoints: {
    circlePitchAlignment: 'map',

    circleColor: [
      'step',
      ['get', 'point_count'],
      '#51bbd6',
      100,
      '#f1f075',
      750,
      '#f28cb1',
    ],

    circleRadius: ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],

    circleOpacity: 0.84,
    circleStrokeWidth: 2,
    circleStrokeColor: 'yellow',
  },

  clusterCount: {
    textField: '{point_count}',
    textSize: 12,
    textPitchAlignment: 'map',
  },
  singlePoint: {
    circleColor: 'orange',
    circleOpacity: 0.84,
    circleStrokeWidth: 2,
    circleStrokeColor: 'white',
    circleRadius: 8,
    circlePitchAlignment: 'map',
   
  },
});
