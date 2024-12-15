import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const thankyou = () => {
  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <Link href="/home" style={{ marginLeft: 20, marginTop: 60 }}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Link>

      <Text
        style={{
          textAlign: "center",
          fontSize: 40,
          marginTop: 200,
          color: "green",
        }}
      >
        Your product has been confirmed........
      </Text>
      <Text style={{ textAlign: "center", fontSize: 60, marginTop: 20 }}>
        Thank You for choosing us
      </Text>
    </View>
  );
};

export default thankyou;
