import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.detail}>Rated: {movie.rated}</Text>
      <Text style={styles.detail}>Year: {movie.year}</Text>
      <Text style={styles.detail}>Genre: {movie.genre}</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6347',
  },
  detail: {
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});
