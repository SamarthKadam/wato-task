import { View, Text,StyleSheet, Pressable} from 'react-native'
import React from 'react'


interface props{
    question:string,
    answer:string,
    onPress:()=>{}
}

export default function InfoMessage({question,answer,onPress}:props) {
  return (
    <View style={styles.container}>
        <Pressable onPress={onPress}>
      <Text style={styles.txt}>{question} <Text style={styles.highlightedtxt}>{answer}</Text></Text>
        </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
container:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:22
},
txt:{
    fontSize:12,
    color:'white'
},
highlightedtxt:{
    color:'#D4FB54'
}
})