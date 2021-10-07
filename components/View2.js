import React, { useState } from 'react'
import { View, Text, ToastAndroid, StyleSheet } from 'react-native'
import { TextInput,Button } from 'react-native-paper'


export default function View2() {
   const [txt1, setTxt1] = useState(0)
   const [txt2, setTxt2] = useState(0)

   const showToast = () => {
      const total = txt1 + txt2
      ToastAndroid.show(`Tu Resultado es ${isNaN(total) ? 0: total}`, ToastAndroid.SHORT);
   };

   return (
      <View style={styles.container}>

         <Text>Vista 2</Text>
         <Text style={{margin: 20, width:'80%'}}>Sumadora, en esta pagina harás una sumadora de 2 números y mostrar el resultado</Text>

         <View style={styles.ff}>
            <Text>Valor 1</Text>
            <TextInput value={txt1} onChange={e => setTxt1(parseInt(e.nativeEvent.text))} style={styles.inputs} />
         </View>
         <View style={styles.ff}>
            <Text>Valor 2</Text>
            <TextInput value={txt2} onChange={e => setTxt2(parseInt(e.nativeEvent.text))} style={styles.inputs} />
         </View>

         <Button style={{ margin: 20 }} onPress={showToast}>Sumar</Button>
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