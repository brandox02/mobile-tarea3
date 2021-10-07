import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import WebView from 'react-native-webview'

export default function View4() {

   const width = Dimensions.get('window').width
   const height = Dimensions.get('window').height

   return (
      <View style={styles.container}>
         <Text>Vista 5</Text>
         <Text style={{ margin:10}}>En esta vista mostraras un video de youtube donde explicaras tu experiencia al hacer esta tareas, no es que programes, si no que nos cuente tu experiencia en el proceso, que te gusto y que no..</Text>
         <View style={{ flex: 1, marginTop: 20 }}>
            <WebView
               height={100}
               style={{ borderWidth: 2, backgroundColor: 'black', width: width - 20, height: 100}}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               source={{ uri: 'https://www.youtube.com/embed/' + 'Q7PmQxY8nDQ' }}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      top: 60,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

      // borderColor: 'black', borderWidth: 2
   },
   item: {
      margin: 10,
      textAlign: 'center'
   },
   ff: {
      margin: 10,
      width: '90%'
   },
   flatList: {
      width: '90%',
      marginBottom: 50
   }
}
)