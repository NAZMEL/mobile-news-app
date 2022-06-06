import React, {useState} from "react";
import { StyleSheet, Text, View,  FlatList, TouchableOpacity } from "react-native";
import {styles} from "./../styles/style";
import FullInfo from "./FullInfo";

export default Main = ({navigation}) => {
    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'lorem ipsum'},
        {name: 'Apple', anons: 'Apple!!!', full: 'lorem ipsum'},
        {name: 'SoftServe', anons: 'Future!', full: 'lorem ipsum'},
    ])

    return(
        <View>
            <Text style={styles.title}>Main page</Text>
            <FlatList data={news} renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                        <Text>{item.name}</Text>
                        <Text>{item.anons}</Text>
                    </TouchableOpacity>
                )
            }}/>
            
        </View>
    )
}

