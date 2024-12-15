import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import btlImages from "../constants/bottleImages";
import axios from "axios";

const Bottles = () => {
  const Container = Platform.OS === "web" ? View : SafeAreaView;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("http://10.10.100.126:5000/api/products/bottle") // Updated IP
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              {console.log(item)}
              <Link
                href="/productDetails"
                style={{ marginLeft: 340, marginTop: 10 }}
              >
                <AntDesign name="arrowright" size={24} color="black" />
              </Link>
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
    // height: 200,
    width: 388,
    padding: 10,
    borderRadius: 10,
  },
  productCard: {
    marginHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 8,
    // padding: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  menuImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
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
});
