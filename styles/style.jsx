import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        paddingTop: 30
      },
    header:{
      marginTop: 20,
      marginBottom: 30,
    },
    title: {
        fontSize: 20,
        color: "#333",
        textAlign: 'center',
      },
    item:{
      width: '100%',
      marginBottom: 30,
    }, 
    anons:{
      fontSize: 16,
      textAlign: 'center',
      marginTop: 20,
      color: '#474747',
    },
    iconAdd:{
      textAlign: 'center',
      margin: 15,
      marginBottom: 30,
    },
    iconClose:{
      textAlign: 'center',
      margin: 15,
      marginBottom: 30,
      color: 'red',
    },
    input:{
      borderWidth: 1,
      margin: 10,
      marginTop: 15,
      padding: 10,
      borderRadius: 5,
      borderColor: 'silver',
    }, 
})