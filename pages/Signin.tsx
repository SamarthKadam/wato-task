import { View, Text, StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Input from '../components/Input'
import Password from '../components/Password'
import Button from '../components/Button'
import InfoMessage from '../components/InfoMessage'
import GoogleButton from '../components/GoogleButton'
import { useNavigation } from '@react-navigation/native'


const width=Dimensions.get('screen').width
export default function Signin() {

  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{marginTop:100,marginBottom:40,color:'white',fontSize:18}}>Please sign-in to your account</Text>
      <View style={styles.inputContainer}>
      <LinearGradient colors={['rgba(108, 112, 94,0.5)', 'rgba(65, 68,61, 0.5)', 'rgba(38, 40, 42, 0.8)']} start={{ x: 0.5, y: 0 }}
        end={{ x: 0, y: 0.5 }} style={styles.lineargradient}>
         <Input defaultplaceholder="Email"></Input>
         <Password></Password>
         <View style={{flexDirection:'row',justifyContent:'flex-end',marginBottom:28}}>
         <Text style={{color:'#D4FB54',fontSize:12,marginTop:18}}>Forgot Password?</Text>
         </View>
         <Button title='Login' onPress={()=>{}}></Button>
         <InfoMessage onPress={()=>{navigation.navigate('SignUp')}} question='New to our platform?' answer='Create an account'></InfoMessage>
         <View style={{flexDirection:'row',justifyContent:'center',marginVertical:20}}>
          <Text style={{color:'white'}}>or</Text>
         </View>
         <GoogleButton title='Continue With Google'></GoogleButton>
</LinearGradient>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#010101',
    paddingHorizontal:14
  },
  inputContainer:{

  },
  lineargradient:{
    borderRadius:4,
    paddingHorizontal:8
  }
})