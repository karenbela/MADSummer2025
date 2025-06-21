import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hi, John Doe</Text>
        <Text style={styles.subtext}>Have you track your money today?</Text>
      </View>
      <Image source={require('../../../assets/pic.png')} style={styles.avatar} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 14,
    color: '#888',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
