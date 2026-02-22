import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ApiClient from '../services/api/ApiClient';
import { products } from '../types/type'; // make sure it's exported as interface

const { width } = Dimensions.get("screen");

const AllProducts = () => {
  const [products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiClient.get("products");
      setProducts(response); // ✅ correct
    } catch (error) {
      console.log("API ERROR", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 10,
  },
});

const RenderItem = ({ item }: { item: products }) => {
  return (
    <View
      style={{
        padding: 12,
        width: width * 0.45,
        elevation: 3,
        backgroundColor: "white",
        margin: 8,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 120 }}
        resizeMode="contain"
      />

      <Text numberOfLines={1} style={{ fontWeight: "600" }}>
        {item.title}
      </Text>

      <Text>₹ {item.price}</Text>
      <Text numberOfLines={1}>{item.category}</Text>
    </View>
  );
};
