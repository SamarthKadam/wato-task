import { View, Text, StyleSheet,Pressable,Dimensions} from 'react-native'
import React from 'react'
import SVGIMG from '../assets/GodRays.svg'
import SVGIMG2 from '../assets/Sparkles.svg'
import LinearGradient from 'react-native-linear-gradient'
import Ripple from 'react-native-material-ripple';
import InfoMessage from '../components/InfoMessage'
import { useNavigation } from '@react-navigation/native'

const width=Dimensions.get('screen').width

export default function Home() {
  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.godraysContainer}>
      <SVGIMG></SVGIMG>
      </View>
      <View style={styles.sparklesContainer}>
      <SVGIMG2></SVGIMG2>
      </View>
      <View style={styles.infoContainer}>
        <View>
        <Text style={styles.boldtxt}>wato</Text>
        </View>
        <View style={{marginTop:10}}>
          <Text style={styles.mdtxt}>Zero Cost </Text>
          <Text style={styles.mdtxt}>WhatsApp Messaging</Text>
          <Text style={styles.mdtxt}>platform</Text>
        </View>
        <View style={styles.btnContainer}>
        <Ripple onPress={()=>{navigation.navigate('SignIn')}}>
        <LinearGradient colors={['#333435','#1B1C1D']}  start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }} style={styles.lineargradient}>
  <Text style={styles.buttonText}>
    Get Started
  </Text>
</LinearGradient>
        </Ripple>
        </View>
        <InfoMessage question='Already have an account?' answer='Sign in instead' onPress={()=>{navigation.navigate('SignIn')}}></InfoMessage>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#010101'
  },
  textcontainer:{
    position:'absolute',
    top:'40%',
  },
  boldtxt:{
    color:'white',
    fontFamily:'FiraSans-ExtraBold',
    fontSize:48,
  },
  mdtxt:{
    fontSize:28,
    fontFamily:'RobotoSlab-Light',
    color:'white',
    paddingVertical:2
  },
  sparklesContainer:{
    position:'absolute',
    top:-120
  },
  godraysContainer:{
    position:'absolute',
    top:0
  },
  infoContainer:{
    position:'absolute',
    top:'35%',
    width:'100%',
    paddingHorizontal:18,
  },
  btnContainer:{
    marginTop:72,
    flexDirection:'row',
    justifyContent:'center',
  },
  lineargradient:{
    paddingLeft:width/3,
    paddingRight:width/3,
    paddingVertical:14,
    borderWidth:0.8,
    borderColor:'white',
    borderRadius:10
  },
  buttonText:{
    color:'white',
    fontWeight:'600',
    fontSize:16,
  }
})