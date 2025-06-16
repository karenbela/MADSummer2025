import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan username anda"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff6a00',
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
