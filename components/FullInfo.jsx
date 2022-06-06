import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";


export default FullInfo = ({route}) =>{
    return (
        <View>
            <Text style={styles.title}>{route.params.name}</Text> 
            <Text>{route.params.full}</Text> 
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