import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.description}>React Native Developer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    width: 300
  },
  image: {
    width: 100, height: 100, borderRadius: 50, marginBottom: 15
  },
  name: {
    fontSize: 20, fontWeight: 'bold'
  },
  description: {
    fontSize: 14, color: 'gray', marginTop: 5
  }
});
