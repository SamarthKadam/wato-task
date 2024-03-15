import { View, Text, StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Input from '../components/Input'
import Password from '../components/Password'
import Button from '../components/Button'
import InfoMessage from '../components/InfoMessage'
import GoogleButton from '../components/GoogleButton'
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const width=Dimensions.get('screen').width
export default function Signup() {

  const navigation=useNavigation();
  const [isChecked,setIsChecked]=useState(false);

  return (
    <View style={styles.container}>
      <Text style={{marginTop:100,marginBottom:40,color:'white',fontSize:18}}>Please sign-up to your account</Text>
      <View style={styles.inputContainer}>
      <LinearGradient colors={['rgba(108, 112, 94,0.5)', 'rgba(65, 68,61, 0.5)', 'rgba(38, 40, 42, 0.8)']} start={{ x: 0.5, y: 0 }}
        end={{ x: 0, y: 0.5 }} style={styles.lineargradient}>
         <Input defaultplaceholder="Name"></Input>
         <Input defaultplaceholder="Email"></Input>
         <Password></Password>
         <View style={styles.checkboxContainer}>
         <CheckBox
    disabled={false}
    value={isChecked}
    onValueChange={(newValue) => setIsChecked(newValue)}
  />
         <Text style={{color:'white',fontSize:12,marginLeft:6}}>I agree <Text style={{color:'#D4FB54'}}>to privacy policy & terms</Text></Text>
         </View>
         <Button title='Sign Up' onPress={()=>{}}></Button>
         <InfoMessage question='Already have an account?' answer='Sign in instead' onPress={()=>{navigation.goBack()}}></InfoMessage>
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
  },
  checkboxContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:28,
    marginTop:16
  }
})