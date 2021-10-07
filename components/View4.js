import React, { useState } from 'react'
import { View, Text, ToastAndroid, StyleSheet, FlatList } from 'react-native'
import { NumerosALetras } from 'numero-a-letras'
import { TextInput, Button } from 'react-native-paper'

export default function View4() {
   const [txt, setTxt] = useState(0)
   const [dataToTable, setDataToTable] = useState([])

   const onAction = () => {
      const _dataToTable = []
      for (let i = 1; i <= parseInt(txt); i++) {
         for (let i2 = 1; i2 <= 13; i2++) {
            _dataToTable.push({
               key: `${i} x ${i2} = ${i * i2}`
            })
         }
      }
      setDataToTable(_dataToTable)

   }

   return (
      <View style={styles.container}>

         <Text>Vista 4</Text>

         <View style={styles.ff}>
            <Text>Programa que acepte un numero y muestra la tabla de multiplicar de ese numero hasta el 13... ejemplo 5: 5x1 =5, 5x 2 = 10.... y así hasta el 13.</Text>
            <TextInput style={{ padding: 20 }} value={txt} onChange={e => setTxt(e.nativeEvent.text)} style={styles.inputs} />
            <Button onPress={onAction}>Generar</Button>
         </View>
         <FlatList
            style={styles.flatList}
            data={dataToTable}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
         />

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