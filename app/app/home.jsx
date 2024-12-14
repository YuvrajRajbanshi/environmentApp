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

import ALL_ITEMS from "../constants/homepageproducts";
import allImages from "../constants/homeImages";
import axios from "axios";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text) {
      const filtered = ALL_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    axios
      // .get("localhost:5000/test")
      .get("http://localhost:5000/test")
      .then((response) => {
        console.log(response.data);
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
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {/* Welcome Section */}
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={styles.heading}>Hello, Welcome to EcoSwap </Text>
            <Text
              style={{ textAlign: "center", color: "#228B22", fontSize: 40 }}
            >
              Yuvraj
            </Text>
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
                {/* <Text style={styles.trendingText}>🌿 Reusable Bottles</Text> */}
                <Link href="/bottles" asChild>
                  <Pressable>
                    <Text style={styles.trendingText}>🌿 Reusable Bottles</Text>
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
                    <Text style={styles.trendingText}>♻️ Sustainable Bags</Text>
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
              // value={searchQuery}r
              onChangeText={handleSearch}
            />

            {/* Display Filtered Results */}

            <FlatList
              data={searchQuery ? filteredData : []}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.resultItem}>
                  {/* <Text style={styles.resultText}>{item.title}</Text> */}
                </TouchableOpacity>
              )}
              ListEmptyComponent={
                searchQuery && filteredData.length === 0 ? (
                  <Text style={styles.noResults}>No results found</Text>
                ) : null
              }
            />
          </View>

          {/* Product List */}
          <Container>
            <View style={{ margin: 10 }}>
              <FlatList
                data={searchQuery ? filteredData : ALL_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.productCard}>
                    <Image
                      source={allImages[item.id - 1]}
                      style={styles.menuImage}
                    />
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productDescription}>
                      {item.description}
                    </Text>
                    <Text style={styles.productPrice}>₹ {item.price}</Text>
                  </View>
                )}
              />
            </View>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  resultText: {
    fontSize: 16,
    color: "#333",
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
    padding: 15,
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
    textAlign: "center",
  },
  productDescription: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#228B22",
    textAlign: "center",
  },
});
