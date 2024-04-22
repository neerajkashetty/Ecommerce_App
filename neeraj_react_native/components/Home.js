import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import lifestyle from '../utils/cart.jpg'

const HomeScreen = ({ navigation }) => {
  const navigateToCategory = (category) => {
    navigation.navigate('Sub-Category', { category });
  };

  return (
    <View style={styles.container}>
        <Image source={lifestyle} style={{position: 'absolute'}}/>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigateToCategory('Lifestyle')}>
        <Text style={styles.categoryButtonText}>Beauty and Lifestyle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigateToCategory('Groceries')}>
        <Text style={styles.categoryButtonText}>Groceries</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigateToCategory('Health')}>
        <Text style={styles.categoryButtonText}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigateToCategory('Restaurants')}>
        <Text style={styles.categoryButtonText}>Restaurants</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#C1E1C1'
  },
  categoryButton: {
    backgroundColor: '#C1E1C1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  categoryButtonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
});

export default HomeScreen;
