import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';
import SVGICON from '../assets/google.svg'

const GoogleButton= ({ title, onPress}) => {
  return (
        <Ripple rippleColor={'rgb(211, 211, 211)'} style={styles.button} onPress={onPress}>
        <SVGICON height={26}></SVGICON>
      <Text style={styles.buttonText}>{title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  button: { 
    paddingHorizontal:18,
    paddingVertical:14,
    borderColor:'white',
    borderRadius: 8,
    borderWidth:1,
    alignItems: 'center',
    color:'black',
    overflow:"hidden",
    backgroundColor:'#262728',
    marginVertical:12,
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonText: {
   // Change the text color to your preference
    fontSize: 16,
    fontWeight:'600',
    fontFamily:"DmSans",
    color:'white'
  },
});

export default GoogleButton;