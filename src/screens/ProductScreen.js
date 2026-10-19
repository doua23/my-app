import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

import products from '../data/products';

export default function ProductScreen() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.price}>
          {item.price} €
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },

  itemContainer: {
    width: '50%',
    padding: 8,
    marginBottom: 10,
  },

  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },

  price: {
    fontSize: 15,
    color: '#555',
    marginTop: 4,
  },
});