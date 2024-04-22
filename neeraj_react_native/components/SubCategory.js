import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const navigateToSubCategory = (category) => {
    navigation.navigate('Ecom', { category });
  };

  // Objects for each category with their subcategories and offers
  const beautyAndLifestyle = {
    name: 'Beauty and Lifestyle',
    discounts: 25,
    subCategories: [
      { name: 'Skin Care', offers: ['Moisturizer', 'Face Mask', 'Serum'] },
      { name: 'Makeup', offers: ['Lipstick', 'Eyeshadow Palette', 'Foundation'] },
    ],
  };

  const groceries = {
    name: 'Groceries',
    discounts: 15,
    subCategories: [
      { name: 'Fruits', offers: ['Apple', 'Banana', 'Orange'] },
      { name: 'Vegetables', offers: ['Tomato', 'Carrot', 'Broccoli'] },
    ],
  };

  const health = {
    name: 'Health',
    discounts: 20,
    subCategories: [
      { name: 'Vitamins', offers: ['Multivitamin', 'Vitamin C', 'Vitamin D'] },
      { name: 'Fitness', offers: ['Protein Powder', 'Resistance Bands', 'Yoga Mat'] },
    ],
  };

  const restaurants = {
    name: 'Restaurants',
    discounts: 10,
    subCategories: [
      { name: 'Italian Cuisine', offers: ['Pizza', 'Pasta', 'Lasagna'] },
      { name: 'Asian Cuisine', offers: ['Sushi', 'Noodles', 'Curry'] },
    ],
  };

  // Function to render category buttons
  const renderCategoryButton = (category) => (
    <TouchableOpacity
      style={styles.categoryButton}
      onPress={() => navigateToSubCategory(category.name)}
    >
      <Text style={styles.categoryText}>{category.name}</Text>
      <Text style={styles.discountText}>Discounts: {category.discounts}% off</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderCategoryButton(beautyAndLifestyle)}
      {renderCategoryButton(groceries)}
      {renderCategoryButton(health)}
      {renderCategoryButton(restaurants)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  categoryButton: {
    backgroundColor: '#C1E1C1',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  categoryText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discountText: {
    color: 'black',
    fontSize: 16,
  },
});

export default CategoryScreen;
