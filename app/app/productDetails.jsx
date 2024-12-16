import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import picture from "../assets/photos/shirt.png";

// const oneProduct = async (id) => {
//   await axios.get("http://10.10.100.126:5000/api/product/prod/" + id); // Updated IP
// };
const productDetails = () => {
  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView>
        <View style={{ backgroundColor: "#218838" }}>
          <Link
            href="/home"
            style={{ marginLeft: 20, marginTop: 40, alignItems: "" }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Link>
          <View
            style={{
              alignItems: "center",

              padding: 10,
            }}
          >
            <Image source={picture} style={{ width: 450, height: 550 }} />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ padding: 10, fontWeight: "bold", fontSize: 28 }}>
            T-Shirt
          </Text>
          <Text style={{ padding: 10, fontSize: 16 }}>
            This is perfect oooooooo Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illum fugiat error, assumenda repellat sit aut
            eveniet optio quas corrupti delectus, reiciendis, cupiditate
          </Text>
          <Text style={{ padding: 10, fontWeight: "bold", fontSize: 22 }}>
            Price: $20
          </Text>

          <View>
            <Link href="/thankyou" asChild>
              <Pressable style={styles.btn}>
                <Text style={styles.txt}>Buy Now </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#228B22",
    padding: 10,
    marginTop: 20,
    margin: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  txt: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
