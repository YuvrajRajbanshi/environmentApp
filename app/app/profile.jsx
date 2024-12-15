import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const profile = () => {
  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView>
        <View style={styles.container}>
          <Link href="/home" style={{ marginLeft: 20, marginTop: 60 }}>
            <AntDesign name="arrowleft" size={30} color="white" />
          </Link>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginTop: 60,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Yuvraj Singh
          </Text>
          <EvilIcons
            name="user"
            size={200}
            color="pink"
            style={{ fontWeight: "bold", textAlign: "center" }}
          />
        </View>
      </SafeAreaView>
      <SafeAreaView style={{ marginTop: -140 }}>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 20 }}>Yuvraj Singh</Text>
        </View>
        <View>
          <Text style={styles.line}></Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 20 }}>Cart</Text>
        </View>
        <View>
          <Text style={styles.line}></Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <MaterialIcons name="password" size={24} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 20 }}>Password</Text>
        </View>
        <View>
          <Text style={styles.line}></Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <FontAwesome name="birthday-cake" size={24} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 20 }}>08 June</Text>
        </View>
        <View>
          <Text style={styles.line}></Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
          <AntDesign name="setting" size={24} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 20 }}>Setting</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    backgroundColor: "purple",
    borderBottomLeftRadius: "50%", // Bottom-left corner
    borderBottomRightRadius: "50%", // Bottom-right corner,
  },
  line: {
    width: "90%", // Adjust the width as needed
    height: 1, // Thin horizontal line
    backgroundColor: "black", // Line color
    margin: "auto",
    marginTop: 10,
  },
});
