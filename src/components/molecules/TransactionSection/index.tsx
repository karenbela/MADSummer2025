import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const TransactionSection = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Add Transaction</Text>
      <Gap height={16} />
      <Button text="Cash On Hand" color="#02CF8E" buttonColor="#FFFFFF" />
      <Gap height={16} />
      <Button text="Cash On Bank" color="#02CF8E" buttonColor="#FFFFFF" />
    </View>
  );
};

export default TransactionSection;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
