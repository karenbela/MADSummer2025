import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../../assets/Logo.svg';


const SplashScreen = () => {
  return (
    <>
    <View style={styles.container}>
      <Logo />
        <Text style={styles.text}>Money Tracker</Text>
    </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02CF8E',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
    }
})