import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { backgroundColor: "#BFBFBF", margin: 3 ,borderRadius:5,padding:5,flex:0.5},
  image: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    height: Dimensions.get("window").height / 4,
  },
  title: {
    fontWeight: "bold",
    fontSize:28
  },
  price: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "left",
    marginTop:1
    
  },
  stock: {
    color: "red",
    textTransform: "uppercase",
    fontWeight:"bold"
  },
  inner_container: {
      margin: 3,

  },
});
