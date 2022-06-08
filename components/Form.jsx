import React from "react";
import { View, Image, Button, TextInput } from "react-native";
import { Formik } from "formik";
import { styles } from "./../styles/style";

const Form = ({ addArticle }) => {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => {
          return (
            <View>
              <TextInput
                style={styles.input}
                value={props.values.name}
                placeholder="Enter title"
                onChangeText={props.handleChange("name")}
              />
              <TextInput
                style={styles.input}
                value={props.values.anons}
                multiline
                placeholder="Enter anons"
                onChangeText={props.handleChange("anons")}
              />
              <TextInput
                style={styles.input}
                value={props.values.full}
                multiline
                placeholder="Enter text"
                onChangeText={props.handleChange("full")}
              />
              <TextInput
                style={styles.input}
                value={props.values.img}
                placeholder="Download any image"
                onChangeText={props.handleChange("img")}
              />
              <Button title="Add" onPress={props.handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Form;
