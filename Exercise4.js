import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Title from './components/Title';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome</Title>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Masukan username anda" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Masukan password anda" secureTextEntry />
      </View>

      <Button text="Sign In" color="orange" textColor="white" />
      <Button text="Sign In Google" color="red" textColor="white" />
      <Button text="Sign In Facebook" color="blue" textColor="white" />
      <Button text="Sign In Apple" color="black" textColor="white" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
});
