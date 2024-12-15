import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import axios from "axios";

const Bottles = () => {
  const Container = Platform.OS === "web" ? View : SafeAreaView;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://10.10.100.126:5000/api/products/bottle"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container style={{ backgroundColor: "#F5F5DC", flex: 1 }}>
      {/* Back Button */}
      <Link href="/home" style={{ marginLeft: 20, marginTop: 20 }}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Link>

      {/* Product List */}
      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.img }} style={styles.tasveer} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.bg}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text style={styles.productDescription}>
                    {item.description
                      ? item.description.length > 50
                        ? item.description.substring(0, 50) + "..."
                        : item.description
                      : "No description available"}
                  </Text>
                  <Text style={styles.productPrice}>₹ {item.price}</Text>
                </View>
                <AntDesign
                  name="heart"
                  size={30}
                  color="red"
                  style={{ marginLeft: -40, marginTop: 10, paddingRight: 20 }}
                />
              </View>
              {/* Navigate with ID */}
              {/* <Link
                href={`/productDetails/${item._id}`}
                style={{
                  alignSelf: "flex-end",
                  marginRight: 20,
                  marginTop: 10,
                }}
              >
                <AntDesign name="arrowright" size={24} color="black" />
              </Link> */}
              <Link
                href={`/productDetails/${item._id}`}
                style={{
                  alignSelf: "flex-end",
                  marginRight: 20,
                  marginTop: 10,
                }}
              >
                <AntDesign name="arrowright" size={24} color="black" />
              </Link>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noProductsText}>No products available</Text>
          }
        />
      </View>
    </Container>
  );
};

export default Bottles;

const styles = StyleSheet.create({
  tasveer: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  bg: {
    backgroundColor: "#B5E6BD",
    width: 388,
    padding: 10,
    borderRadius: 10,
  },
  productCard: {
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "gray",
    width: "70%",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  noProductsText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
});
