import React from "react";
import {Text, View, Image } from "react-native";
import {styles} from "./../styles/style";


export default FullInfo = ({route}) =>{
    return (
        <View>
             <Image source={{
                            width: '100%',
                            height: 100,
                            uri: route.params.img,
                        }}/>
            <Text style={styles.title}>{route.params.name}</Text> 
            <Text style={styles.anons}>{route.params.full}</Text> 
        </View>
    )
}

