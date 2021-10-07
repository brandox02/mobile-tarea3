import React, { useState } from 'react'
import { View, Text, ToastAndroid, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { NumerosALetras } from 'numero-a-letras'

export default function View3() {
   const [txt, setTxt] = useState('')

   const onAction = () => {
      const result = NumerosALetras(txt)
      ToastAndroid.show(`Tu Resultado es ${result.substring(0,result.length - 11)}`, ToastAndroid.LONG);

   }

   return (
      <View style={styles.container}>

         <Text>Vista 3</Text>
         <Text style={{margin: 20, width:'80%'}}>Un traductor de numeros a letras, se colocara un numero del 1 al 1000 y tu esta vista nos mostrara ese numero en letras en español. (No se puede usar API... quien use api aqui pierde 10 puntos)</Text>
         <View style={styles.ff}>
            <Text>Escribe Aqui tu texto</Text>
            <TextInput value={txt} onChange={e => setTxt(e.nativeEvent.text)} style={styles.inputs} />
            <Button onPress={onAction}>Traducir</Button>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      // borderColor: 'black', borderWidth: 2
   },
   inputs: {
      // width: '60%'
   },
   ff: {
      margin: 10,
      width: '40%'

   }
})