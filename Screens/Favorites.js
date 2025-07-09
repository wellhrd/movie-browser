import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';


function FavoritesScreen({ route }) {

  // Access the favorites passed from HomeScreen
  const { favorites } = route.params || { favorites: [] };
  
  // If no favorites are passed, default to an empty array
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}> What I love to watch ❣</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}> Opps... i've no favorites.. yet❣❣ </Text>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  empty: {
    fontSize: 16,
    color: '#888',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    padding: 10,
    fontSize: 18,
  },
});