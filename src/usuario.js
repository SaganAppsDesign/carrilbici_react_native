import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text, View, ScrollView, Image, ImageBackground, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {  TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';


const bbddd = 'USUARIOS'

const Usuario = (props, navigation) => {

    const [name, setName] = useState('')
    const [id, setID] = useState('')
    
    const AddUser = () => {
           
        firestore()
        .collection(bbddd)
        .add({
           name: name,
          
      }) ;

      firestore()
      .collection(bbddd)
      .where('name', '==', name)
      .get()
      .then(docs => {
        docs.forEach(doc => {
          const data = doc.data()

          // adding new property id with id from Firestore
          data.id = doc.id
         props.navigation.navigate('TabNav', {

          screen:'CarrilBici',
          params: {id:data.id, name:name}
          
          
        })
       
      })
      .catch(err => console.log(err))

          

      })
      
    }

     //lee datos
    firestore().collection(bbddd).doc('cgwKseulMANBMY5u41Aj').onSnapshot(documentSnapshot => {
           console.log(documentSnapshot.data())
          
     });

            
      //Borra usuario

      //firestore()
       // .collection('usuarios')
        //.doc('njdWMJxwwohFmEHfoVZe')
        //.delete()
        //.then(() => {
            //console.log('User erased!');
        //});
    

        return (
            <View>
                       
                 <Text style={{ fontSize:hp('3%'), color: 'black', textAlign:'center', fontFamily:'Sarpanch-ExtraBold', paddingTop:hp('3%')}}>
                       ¿Cuál es tu nombre?
                </Text>
        
                <TextInput
                   
                    label="Nombre"
                    onChangeText={name => setName(name)}
                    value={name}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'blue',underlineColor:'transparent'}}}
                    />
                 <View>
                <Button     
                    style={styles.button}
                    onPress={() => {AddUser()}}
                    title="Añade tu nombre"
                    color="#f194ff"
                           >
                </Button>
                    
                
                </View>
            </View>
            )

}

export default Usuario;


const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'orange',
      },
  });