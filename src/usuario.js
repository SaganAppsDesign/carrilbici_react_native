import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text, View, ScrollView, Image, ImageBackground, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {  TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';


const Usuario = (propiedades) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const AddUser = () => {
     
        firestore()
        .collection('usuarios')
        .add({
           name: name,
          
      }) ;
      
  }

     //lee datos
    //firestore().collection('usuarios').doc('STIkbkZNcyC5A14eY68U').onSnapshot(documentSnapshot => {
      //     setName(documentSnapshot.data().name)
        //   setEmail(documentSnapshot.data().email)
       
      //});

          
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
                    style={styles.nameInput}
                    label="Nombre"
                    onChangeText={setName}
                    value={name}
                    returnKeyType={ 'done' }
                    theme={{ colors: { primary: 'blue',underlineColor:'transparent'}}}
                    />
                 <View>
                <Button     
                    style={styles.button}
                    onPress={AddUser,() => propiedades.navigation.navigate('CarrilBici', { name: name })}
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