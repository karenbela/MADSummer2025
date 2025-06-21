import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BalanceSection = () => {
  return (
    <View style={styles.balanceBox}>
      <Text style={styles.balanceLabel}>Your Balance</Text>
      <Text style={styles.balance}>Rp. 10.000.000</Text>
      <View style={styles.line} />
      <View style={styles.cashInfo}>
        <Text>Cash on Hand</Text>
        <Text>Rp. 4.000.000</Text>
      </View>
      <View style={styles.cashInfo}>
        <Text>Cash on Bank</Text>
        <Text>Rp. 6.000.000</Text>
      </View>
    </View>
  );
};

export default BalanceSection;

const styles = StyleSheet.create({
  balanceBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  balanceLabel: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  cashInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
});
