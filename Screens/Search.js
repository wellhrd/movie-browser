import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { movies } from '../Data/mockMovies';


function SearchScreen({ navigation, route }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Button title="Search" onPress={() => setSubmittedQuery(searchQuery)} />

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.image }} style={styles.movieImage} />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text>{item.genre}</Text>
              <Text>{item.year}</Text>
            </View>
          </View>
        )}
      />
      <Button title='Go back' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  movieImage: {
    width: 80,
    height: 120,
    marginRight: 10,
    borderRadius: 6,
  },
  movieDetails: {
    flexShrink: 1,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});