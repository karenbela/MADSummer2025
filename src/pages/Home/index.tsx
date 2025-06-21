import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/molecules/Header';
import BalanceSection from '../../components/molecules/BalanceSection';
import TransactionSection from '../../components/molecules/TransactionSection';
import Gap from '../../components/atoms/Gap';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Gap height={50} />
      <BalanceSection />
      <Gap height={50} />
      <TransactionSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    flex: 1,
  },
});
