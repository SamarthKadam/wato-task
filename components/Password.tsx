import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import EYESVG from '../assets/eye.svg'

export default function Password() {
  return (
    <View style={styles.container}>
      <TextInput placeholderTextColor='white' secureTextEntry={true} placeholder='Password' style={styles.input}></TextInput>
      <EYESVG style={{right:10,position:'absolute',top:'25%'}} height={20} width={20}></EYESVG>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      marginTop:18,
      flexDirection:'row',
      position:'relative'
    },
    input:{
        borderWidth:0.8,
        borderColor:'white',
        paddingHorizontal:16,
        borderRadius:8,
        fontSize:16,
        width:'100%',
        color:'white'
    }
})