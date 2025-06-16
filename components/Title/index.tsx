import React from 'react';
import { Text, StyleSheet } from 'react-native';

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});