import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Button title='Go back' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {          
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },    
});