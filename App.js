import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {styles} from "./styles/style"
import { useState } from "react/cjs/react.production.min";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.main}>
      <Main/>
    </View>
  );
}
