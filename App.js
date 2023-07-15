import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "./components/Search";
import ProductCard from "./components/ProductCard";
import products_data from "./assets/jsons/Products.json";
import { useEffect, useState } from "react";
export default function App() {
  const renderProducts = ({ item }) => <ProductCard product={item} />;
  const [search, setSearch] = useState();
  const [pdata, setPData] = useState(products_data);

  const searchFunction = (text) => {
    const updatedData = pdata.filter((pdat) => {
      const item_data = `${pdat.title.toUpperCase()}`;
      const text_data = text?.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });

    setPData(updatedData);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>PATIKASTORE </Text>
      <TextInput
        editable
        maxLength={40}
        onChangeText={(text) => {
          setSearch(text);
          search != undefined ? searchFunction(search) : setPData(pdata);
        }}
        style={styles.searchbar}
        placeholder="Ara..."
      />

      <FlatList data={pdata} renderItem={renderProducts} numColumns={2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 3,
  },
  title: {
    height: Dimensions.get("window").height / 20,
    width: Dimensions.get("window").width,
    color: "purple",
    textTransform: "uppercase",
    fontSize: 48,
    fontWeight: "bold",
    marginStart: 5,
    marginBottom:15
  },
  searchbar: {
    height: Dimensions.get("window").height / 20,
    backgroundColor: "#BFBFBF",
    color: "white",
    margin: 3,
    borderRadius: 10,
    padding: 2,
  },
});
