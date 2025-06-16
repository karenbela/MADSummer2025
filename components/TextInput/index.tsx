import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type InputProps = {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'numeric' | 'email-address';
};

const Input = ({ label, placeholder, onChangeText, keyboardType = 'default' }: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});