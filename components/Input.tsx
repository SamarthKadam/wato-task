import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'

export default function Input({defaultplaceholder}) {
  return (
    <View style={[styles.container]}>
      <TextInput placeholderTextColor='white' placeholder={defaultplaceholder} style={styles.input}></TextInput>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      marginTop:18
    },
    input:{
        borderWidth:0.8,
        borderColor:'white',
        paddingHorizontal:16,
        borderRadius:8,
        fontSize:16,
        color:'white'
    }
})