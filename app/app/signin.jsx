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
import sign from "../assets/photos/signin.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView style={{ marginTop: 70 }}>
        {/* Logo */}

        <View style={styles.img}>
          <Image
            source={sign} // Replace with your logo
            style={styles.logo}
          />
        </View>

        <View>
          <Text
            style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}
          >
            Sign In
          </Text>
        </View>
        {/* Input Fields */}

        <View>
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
        {email.trim() && password.trim() ? (
          <View>
            <Link href="/home" asChild>
              <Pressable style={styles.btn}>
                <Text style={styles.sig}>Sign In</Text>
              </Pressable>
            </Link>
          </View>
        ) : (
          <Text style={styles.errorText}>Both fields are required!</Text>
        )}

        {/* for temp purpose only remove it later */}
        {/* <View>
          <Link href="/home" asChild>
            <Pressable style={styles.btn}>
              <Text style={styles.sig}>Sign In</Text>
            </Pressable>
          </Link>
        </View> */}
      </SafeAreaView>
    </View>
  );
};

export default SignIn;

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
