import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SAved = () => {
  return (
    <View style={styles.container}>
      <Text>Saved</Text>
    </View>
  );
};

export default SAved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});