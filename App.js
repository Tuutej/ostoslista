import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Header, Input, Icon, Button, ListItem } from "@rneui/themed";

export default function App() {
  const [itemName, setItemName] = useState("");
  const [itemAmount, setItemAmount] = useState("");
  const [data, setData] = useState([]);

  const addItem = () => {
    if (itemName && itemAmount) {
      const newItem = { key: itemName, amount: itemAmount };
      setData([...data, newItem]);
      setItemName("");
      setItemAmount("");
    }
  };

  const removeItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const clearList = () => {
    setData([]);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header
        containerStyle={styles.header}
        centerComponent={{
          text: "SHOPPING LIST",
          style: { color: "#fff", fontSize: 16 },
        }}
      />
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            placeholder="Item Name"
            onChangeText={(text) => setItemName(text)}
            value={itemName}
          />
          <Input
            style={styles.input}
            placeholder="Amount"
            onChangeText={(text) => setItemAmount(text)}
            value={itemAmount}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={addItem} title="Add" />
          <View style={{ width: 20 }} />
          <Button onPress={clearList} title="Clear " color="red" />
        </View>
        <View style={styles.listContainer}>
          <Text
            style={{
              fontWeight: "bold",
              color: "blue",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Shopping List
          </Text>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={({ item, index }) => (
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.key}</ListItem.Title>
                  <ListItem.Subtitle>{item.amount}</ListItem.Subtitle>
                </ListItem.Content>
                <TouchableOpacity
                  onPress={() => removeItem(index)}
                  style={styles.trashIcon}
                >
                  <Icon name="trash-2" type="feather" color="red" size={24} />
                </TouchableOpacity>
              </ListItem>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <StatusBar style="default" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#007BFF",
  },
  header: {
    height: 60,
    backgroundColor: "#007BFF",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
  },
  list: {
    width: "100%",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  trashIcon: {
    padding: 10,
  },
});
