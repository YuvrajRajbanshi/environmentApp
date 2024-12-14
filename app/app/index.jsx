import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import welcome1 from "../assets/photos/env.png";

const welcome = () => {
  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView>
        <View style={styles.img}>
          <Image
            source={welcome1} // Replace with your logo
            style={styles.logo}
          />
        </View>
        <Text style={styles.heading}>Welcome to EcoSwap</Text>
        <Text style={styles.moto}>
          our journey toward sustainable choices starts here.
        </Text>

        <View>
          <Link href="/signin" asChild>
            <Pressable style={styles.btn}>
              <Text style={styles.sig}>Sign In</Text>
            </Pressable>
          </Link>
        </View>
        <View>
          <Link href="/signup" style={styles.link}>
            Create new Account
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  logo: {},
  img: {
    // margtinTop: 20,
    padding: 10,
    margin: "auto",
  },
  heading: {
    color: "#228B22",
    fontSize: 50,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#228B22",

    padding: 10,
    marginTop: 20,
    margin: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  sig: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  moto: {
    textAlign: "center",
    fontSize: 20,
    color: "#6E6E6E",
    fontStyle: "italic",
    margin: 10,
  },
  link: {
    textAlign: "center",
    color: "gray",
    fontSize: 20,
    margin: 10,
  },
});
