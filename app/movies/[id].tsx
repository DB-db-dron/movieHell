import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MovieDetails = () => {
  return (
    <View style={styles.container}>
      <Text>MovieDetails</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});