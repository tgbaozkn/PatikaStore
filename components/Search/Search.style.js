import { Dimensions, StyleSheet } from 'react-native';


export default StyleSheet.create( {
  
    searchbar: {
        height: Dimensions.get( "window" ).height / 20,
        backgroundColor: "#BFBFBF",
        color:"white",
        margin: 3,
        borderRadius: 10,
        padding:2
    }
})