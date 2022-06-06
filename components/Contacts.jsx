import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default Contacts = () =>{
    return (
        <View>
            <Text style={styles.title}>About us</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "#333",
        textAlign: 'center',
      },
})