import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import btlBanner from "../assets/photos/btlBanner.png";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import ALL_BOTTLES from "../constants/bottels";
import btlImages from "../constants/bottleImages";

const bottles = () => {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  return (
    <ScrollView style={{ backgroundColor: "#F5F5DC", flex: 1 }}>
      <SafeAreaView>
        <Link href="/home" style={{ marginLeft: 20, marginTop: 20 }}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Link>

        <View style={{ margin: 10 }}>
          <FlatList
            data={ALL_BOTTLES}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image
                  source={btlImages[item.id - 1]}
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default bottles;

const styles = StyleSheet.create({
  banner: {
    marginTop: 10,
    width: "100%",
    margin: "auto",
    height: 400,
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
