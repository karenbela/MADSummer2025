import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './components/Title';
import Input from './components/TextInput';
import Button from './components/Button';

const Exercise6 = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Title title="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={(text: string) => setName(text)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={(text: string) => setUsername(text)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={(text: string) => setEmail(text)}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={(text: string) => setAddress(text)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        onChangeText={(text: string) => setPhoneNumber(text.replace(/[^0-9]/g, ''))}
      />
      <Button label="Register" onPress={handleSubmit} />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
});