import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import 'react-native-gesture-handler';
import json from './parking_bicis.json'; 
import json2 from './carrilbici.json'; 

import {
  PermissionsAndroid
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

MapboxGL.setAccessToken('pk.eyJ1IjoiZGFyZW5hcyIsImEiOiJjazE5M3R2OHAwMXA2M2VudDY1MDhwbGZwIn0.O8jPIUaaENpa2YRuAta_wA');

//const Tab = createBottomTabNavigator(); 

{ /* LOGOfor(let i = 0; i < json.features.length; i++){

  json.features[i].properties.localizacion

  if (json.features[i].properties.localizacion == undefined)
      json.features[i].properties.localizacion = "Estación bici"
      
  console.log(json.features[i].properties.localizacion)

}
*/}

const Tab = createBottomTabNavigator()


export class Mapa extends React.PureComponent {


  constructor (props) {
    super(props);
    
  }

  state = {
    estilomapa: MapboxGL.StyleURL.Street,
    
   }

 
  render() {

    const satelite = () => (

      this.setState({estilomapa: MapboxGL.StyleURL.SatelliteStreet})
     
    )

    const street = () => (

      this.setState({estilomapa: MapboxGL.StyleURL.Street})
    
    )

    const dark = () => (

      this.setState({estilomapa: MapboxGL.StyleURL.Dark})
    
    )
    

    return (

        

      <View style={styles.page}>

         
         <View style={styles.container}>

              
       
              <MapboxGL.MapView 
               styleURL={this.state.estilomapa}
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
                    

                    { /*json carril bici2 */}
                    <MapboxGL.ShapeSource 
                     
                     id="carrilbici2"
                     
                     shape={json2}
                     
                     > 
                     <MapboxGL.LineLayer
                          id="line2"
                          style={styles.line2}
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

                    

                  

                </View>

          </MapboxGL.MapView>


           {/*Botones*/}     
        <View style={{alignItems:'center', flex:0.07,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%'), backgroundColor:'black'}}>  
        
        <View  style={{alignItems:'center', flex:1,  justifyContent:'center', borderColor:'gray', borderWidth: 1, marginTop:hp('0%'), marginBottom:hp('0%')}}>
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

       <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:1, borderColor:'gray', borderWidth: 1, marginTop:hp('0%'), marginBottom:hp('0%')}}>
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



         <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:1,  borderColor:'gray', borderWidth: 1, marginTop:hp('0%'), marginBottom:hp('0%')}}>
         
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
     
     
{/* FIN botones */}     
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
    lineColor:'green',
    lineWidth:2
  },

  line2: {
    lineColor:'white',
    lineWidth:8
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