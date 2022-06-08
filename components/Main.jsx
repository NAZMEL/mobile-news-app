import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { styles } from "./../styles/style";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default Main = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      key: 1,
      name: "Google",
      anons: "Google!!!",
      full: "lorem ipsum",
      img: "https://youteam.io/blog/wp-content/uploads/2021/11/react-native-logo.png",
    },
    {
      key: 2,
      name: "Apple",
      anons: "Apple!!!",
      full: "lorem ipsum",
      img: "https://youteam.io/blog/wp-content/uploads/2021/11/react-native-logo.png",
    },
    {
      key: 3,
      name: "SoftServe",
      anons: "Future!",
      full: "lorem ipsum",
      img: "https://youteam.io/blog/wp-content/uploads/2021/11/react-native-logo.png",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) =>{
      setNews((list) => {
          article.key = Math.random().toString();
          return [
              article,
              ...list
          ]
      })
      setModalWindow(false)
  }

  return (
    <View>
      <Text style={[styles.title, styles.header]}>Main page</Text>
      <Modal visible={modalWindow}>
        <View>
          <Ionicons
            style={styles.iconClose}
            name="md-close-circle"
            size={24}
            color="black"
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Add a new article</Text>
            <Form addArticle={addArticle} />
        </View>
      </Modal>
      
      <AntDesign
        style={styles.iconAdd}
        name="pluscircle"
        size={24}
        color="black"
        onPress={() => setModalWindow(true)}
      />

      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("FullInfo", item)}
            >
              <Image
                source={{
                  width: "100%",
                  height: 50,
                  uri: item.img,
                }}
              />
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.anons}>{item.anons}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
