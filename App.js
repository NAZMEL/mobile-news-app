import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import {styles} from "./styles/style"
import { useState } from "react/cjs/react.production.min";
import Navigate from "./navigate";

export default function App() {
  return (
    <View style={styles.main}>
      <Navigate />
    </View>
  );
}
