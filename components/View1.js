import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function View1() {
   return (
      <View style={styles.container}>

         <Text style={styles.margin}>Vista 1</Text>
         <Text style={styles.margin}>Pagina inicial, donde mostraras tus datos: foto 2x2, nombre, apellido y correo.</Text>
         <Text style={styles.margin}>Brandon Saul Fernandez Mejia</Text>
         <Text style={styles.margin}>2019-7875</Text>
         <Text style={styles.margin}>brandonprogamer02@gmail.com</Text>
         <Image source={require('../assets/me.jpg')} style={{ width: 50, height: 70 }} />

      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   margin: { margin: 20 }
})