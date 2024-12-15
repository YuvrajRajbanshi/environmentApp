import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import signup1 from "../assets/photos/signin.png";
import axios from "axios";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://10.10.100.126:5000/api/product/newUser", {
        name,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView style={{ marginTop: 70 }}>
        {/* Logo */}
        <View style={styles.img}>
          <Image
            source={signup1} // Replace with your logo
            style={styles.logo}
          />
        </View>
        <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
          Create an account
        </Text>
        {/* Input Fields */}
        <View>
          <TextInput
            placeholder="Name"
            style={styles.input}
            keyboardType="email-address"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {/* Conditional Rendering of Button */}
        {email.trim() && password.trim() && name ? (
          <View>
            <Link href="/home" asChild>
              <Pressable style={styles.btn}>
                <Text style={styles.sig}>Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        ) : (
          <Text style={styles.errorText}>All fields are required!</Text>
        )}

        {/* for temp purpose only remove it later */}
        {/* <View>
          <Link href="/home" asChild>
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.sig}>Sign Up</Text>
            </Pressable>
          </Link>
        </View> */}
      </SafeAreaView>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    marginTop: 40,
  },
  img: {
    padding: 10,
    alignItems: "center",
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    margin: 10,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
