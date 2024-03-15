import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';

const Button= ({ title, onPress}) => {
  return (
        <Ripple rippleColor={'rgb(211, 211, 211)'} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  button: { // Change the background color to your preference
    paddingHorizontal:18,
    paddingVertical:14,
    borderColor:'#CCCCCC',
    borderRadius: 8,
    alignItems: 'center',
    color:'black',
    overflow:"hidden",
    backgroundColor:'#D4FB54',
    marginVertical:12
  },
  buttonText: {
   // Change the text color to your preference
    fontSize: 16,
    fontWeight:'700',
    fontFamily:"DmSans",
    color:'black'
  },
});

export default Button;