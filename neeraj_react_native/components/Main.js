import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const homeImage = require('../utils/home.jpg');
const gadetImage = require('../utils/gadgets.jpg')
const cartImage = require('../utils/lifestyle.png');
const cushionImage = require('../utils/home.jpg');
const wallArtImage = require('../utils/home.jpg');
const smartwatchImage = require('../utils/home.jpg');
const earbudsImage = require('../utils/earbuds.jpg');
const lipstickImage = require('../utils/home.jpg');
const skincareImage = require('../utils/home.jpg');

const homeDecorOffers = [
  {
    id: 1,
    name: 'Cushions',
    image: cushionImage,
    price: '$20',
    discount: '$15'
  },
  {
    id: 2,
    name: 'Wall Art',
    image: wallArtImage,
    price: '$30',
    discount: '$25'
  }
];

const gadgetsOffers = [
  {
    id: 3,
    name: 'Smartwatch',
    image: require('../utils/smartwatch.jpg'),
    price: '$150',
    discount: '$120'
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    image: earbudsImage,
    price: '$100',
    discount: '$80'
  }
];

const beautyProductsOffers = [
  {
    id: 5,
    name: 'Lipstick Set',
    image: lipstickImage,
    price: '$50',
    discount: '$40'
  },
  {
    id: 6,
    name: 'Skincare Bundle',
    image: skincareImage,
    price: '$80',
    discount: '$65'
  }
];

const subCategories = [
  { name: 'Home Decor', image: homeImage, offers: homeDecorOffers },
  { name: 'Gadgets', image:gadetImage,offers: gadgetsOffers },
  { name: 'Beauty Products',image: cartImage, offers: beautyProductsOffers }
];

const SubCategoryScreen = ({ navigation }) => {
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [cart, setCart] = useState([]);
  
    const navigateToOfferDetails = (offer) => {
      navigation.navigate('OfferDetails', { offer });
    };

    const navigateToCart = () => {
        navigation.navigate('Cart', { cart });
      };
  
    const addToCart = (offer) => {
      setCart([...cart, offer]);
    };
  
    const removeFromCart = (offer) => {
      setCart(cart.filter((item) => item.id !== offer.id));
    };
  
    const isInCart = (offer) => {
      return cart.some((item) => item.id === offer.id);
    };
  
  
    const renderSubCategory = () => {
      if (!selectedSubCategory) {
        return (
          <View style={styles.subCategoryContainer}>
            {subCategories.map((subCategory) => (
              <TouchableOpacity
                key={subCategory.name}
                style={styles.subCategoryButton}
                onPress={() => setSelectedSubCategory(subCategory)}
              >
                <View style={styles.subCategoryImageContainer}>
                <Image source={subCategory.image} style={styles.subCategoryImage} resizeMode="contain" />
              </View>
                <Text style={styles.subCategoryTitle}>{subCategory.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }
  
      return (
        <ScrollView contentContainerStyle={styles.selectedSubCategoryContainer}>
         <View style={styles.selectedSubCategoryImageContainer}>
          <Image source={selectedSubCategory.image} style={styles.selectedSubCategoryImage} resizeMode="contain" />
        </View>
          <Text style={styles.subCategoryTitle}>{selectedSubCategory.name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedSubCategory.offers.map((offer) => (
              <View key={offer.id} style={styles.offerContainer}>
                <TouchableOpacity
                  style={styles.offerButton}
                  onPress={() => navigateToOfferDetails(offer)}
                >
                  <Image source={offer.image} style={styles.offerImage} />
                  <Text style={styles.offerName}>{offer.name}</Text>
                  <Text style={styles.offerPrice}>Price: {offer.price}</Text>
                  <Text style={styles.offerDiscount}>Discount: {offer.discount}</Text>
                </TouchableOpacity>
                <View style={styles.cartButtonsContainer}>
                  <TouchableOpacity
                    style={[styles.cartButton, isInCart(offer) && styles.cartButtonRemove]}
                    onPress={() => (isInCart(offer) ? removeFromCart(offer) : addToCart(offer))}
                  >
                    <Text style={styles.cartButtonText}>{isInCart(offer) ? '-' : '+'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.goToCartButton} onPress={navigateToCart}>
          <Text style={styles.goToCartButtonText}>Go to Wishlist</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedSubCategory(null)}
          >
            <Text style={styles.backButtonText}> Back</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose a sub-category:</Text>
        {renderSubCategory()}
      </View>
    );
  };
  
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  subCategoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
    overflow: 'hidden',
  },
  subCategoryScrollContainer: {
    paddingVertical: 10,
  },
  selectedSubCategoryContainer: {
    paddingBottom: 20,
  },
  subCategoryImage: {
    width: '100%',
    height: '100%',
  },
  selectedSubCategoryImageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    overflow: 'hidden',
  },
  selectedSubCategoryImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subCategoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subCategoryButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10
  },
  subCategoryTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  offerButton: {
    marginRight: 20,
    alignItems: 'center'
  },
  offerImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  offerName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  offerPrice: {
    fontSize: 14,
    color: '#555'
  },
  offerDiscount: {
    fontSize: 14,
    color: 'green'
  },
  backButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cartButtonsContainer: {
    marginLeft: 10,
  },
  cartButton: {
    backgroundColor: 'green',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  cartButtonRemove: {
    backgroundColor: 'red',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goToCartButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  goToCartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


});

export default SubCategoryScreen;