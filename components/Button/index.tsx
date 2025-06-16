import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});