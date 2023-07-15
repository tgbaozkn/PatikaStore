import React,{useEffect} from "react";
import { TextInput, View ,Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./Search.style"
const SearchBar = ({onSearch}) =>
{
  const [ text, setText ] = React.useState("");

  const storeData = async (text) => {
  try {
    await AsyncStorage.setItem('search',JSON.stringify(text));
  
  } catch (error) {
    console.log(error)
  }
  };
  useEffect( () =>
  {
    storeData(text);
  },[text])
   
  return (
      <View>
      <TextInput
        editable
        maxLength={40}
        onChangeText={(text)=>setText(text)}
        style={styles.searchbar}
        placeholder="Ara..."
 
      />
      
  </View>
  );
};
export default SearchBar;