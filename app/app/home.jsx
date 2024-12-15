import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("http://10.10.100.126:5000/api/products/home") // Updated IP
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

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [heart, setHeart] = useState(false);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5DC", flex: 1 }}>
      {/* Welcome Section */}
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ marginTop: 0, alignItems: "center" }}>
              {/* <Text style={styles.heading}>Hello, Welcome to EcoSwap </Text>

              <Text
                style={{ textAlign: "center", color: "#228B22", fontSize: 40 }}
              >
                Yuvraj
              </Text> */}

              <Link
                href="/profile"
                style={{ marginLeft: 340, marginBottom: 20 }}
              >
                <EvilIcons
                  name="user"
                  size={50}
                  color="black"
                  style={{ fontWeight: "bold" }}
                />
              </Link>
              <Text style={styles.subhead}>
                Discover eco-friendly choices today.
              </Text>
            </View>

            {/* Trending Section */}
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.trend}>Trending Now</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScroll}
              >
                <View style={styles.trendingItem}>
                  <Link href="/bottles" asChild>
                    <Pressable>
                      <Text style={styles.trendingText}>
                        🌿 Reusable Bottles
                      </Text>
                    </Pressable>
                  </Link>
                </View>
                <View style={styles.trendingItem}>
                  <Link href="/notebooks" asChild>
                    <Pressable>
                      <Text style={styles.trendingText}>🌱 Eco Notebooks</Text>
                    </Pressable>
                  </Link>
                </View>
                <View style={styles.trendingItem}>
                  <Link href="/solar" asChild>
                    <Pressable>
                      <Text style={styles.trendingText}>🌞 Solar Chargers</Text>
                    </Pressable>
                  </Link>
                </View>
                <View style={styles.trendingItem}>
                  <Link href="/bags" asChild>
                    <Pressable>
                      <Text style={styles.trendingText}>
                        ♻️ Sustainable Bags
                      </Text>
                    </Pressable>
                  </Link>
                </View>
              </ScrollView>
            </View>

            {/* Search Bar */}
            <View style={styles.container}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search for products..."
                onChangeText={handleSearch}
              />
            </View>
          </>
        }
        data={searchQuery ? filteredData : data}
        keyExtractor={(item) => item.id.toString()}
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
          searchQuery && filteredData.length === 0 ? (
            <Text style={styles.noResults}>No results found</Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default Home;

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
  heading: {
    color: "#228B22",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  subhead: {
    color: "gray",
    fontSize: 20,
    marginTop: 10,
    textAlign: "center",
  },
  trend: {
    color: "#228B22",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  noResults: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
  horizontalScroll: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  trendingItem: {
    backgroundColor: "#A5D6A7",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  trendingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
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
