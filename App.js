import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const addButton = () => {
    setData([...data, { key: text }]);
    setText("");
  };

  const clearButton = () => {
    setData([]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={addButton} title="Add" />
        <View style={{ width: 20 }} />
        <Button onPress={clearButton} title="Clear" />
      </View>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
