import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { movies } from '../Data/mockMovies';


function HomeScreen({ navigation }) {

  // State to manage favorites
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    const exists = favorites.find(fav => fav.id === movie.id);
    if (exists) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };


  // Function to render each movie item
  const renderItem = ({ item }) => {
    const isFavorite = favorites.some(fav => fav.id === item.id);

    return (
 <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { movie: item })}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.movieDetails}>Rated: {item.rated}</Text>
          <Text style={styles.movieDetails}>Year: {item.year}</Text>
          <Text style={styles.movieDetails}>Genre: {item.genre}</Text>


          <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.heartButton}>
            <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : 'black'} />
          </TouchableOpacity>
        </View>
        {/* <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.movieDetails}>Rated: {item.rated}</Text>
      <Text style={styles.movieDetails}>Year: {item.year}</Text>
      <Text style={styles.movieDetails}>Genre: {item.genre}</Text>
    </TouchableOpacity>
    ); */}
      </View>
      </TouchableOpacity>

    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header} >Awesome movies to watch </Text>

      <FlatList data={movies} renderItem={renderItem} keyExtractor={item => item.id} contentContainerStyle={styles.list} />


      <TouchableOpacity
        style={styles.favoritesButton}
        onPress={() => navigation.navigate('Favorites', { favorites })}
      >
        <Text style={styles.favoritesText}>Go to Favorites ({favorites.length})</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // shadow on Android
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
    position: 'relative',
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#FF6347',
  },
  movieDetails: {
    padding: 10,
    fontSize: 16,
    color: '#555',
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoritesButton: {
    padding: 16,
    backgroundColor: 'tomato',
    alignItems: 'center',
    margin: 16,
    borderRadius: 10,
  },
  favoritesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


});