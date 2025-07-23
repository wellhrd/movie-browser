import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function FavoritesScreen({ route }) {

  const { favorites, setFavorites } = route.params || { favorites: [] };
  //const [favorites, setFavorites] = useState( route.params?.favorites || [] ); //Some errors with this atm


  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        } else if (route.params?.favorites) {
          // Save initial favorites from route params if no stored data
          await AsyncStorage.setItem('favorites', JSON.stringify(route.params.favorites));
          setFavorites(route.params.favorites);
        }
      } catch (error) {
        console.error('Failed to load favorites:', error);
      }
    };
    loadFavorites();
  }, [route.params?.favorites]);

  // Save favorites to AsyncStorage whenever they change
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (error) {
        console.error('Failed to save favorites to AsyncStorage:', error);
      }
    };

    if (favorites.length > 0) {
      saveFavorites();
    }
  }, [favorites]);

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
    color: '#FF6347',
  },
});