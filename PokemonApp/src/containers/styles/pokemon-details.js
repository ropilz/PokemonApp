import {StyleSheet} from "react-native";
import Metrics from "../../theme/metrics";

export default  StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  flexDirection: "column",
  alignItems: "center"
},

cardView: {
  width: "100%",
  alignSelf: "flex-start",
  flexDirection: "row",
  borderRadius: 16,
  justifyContent: "center"
},

pokemonImage: {
  width: 300,
  opacity: 1,
  height: 300 ,
  marginBottom: 35
},

pokemonDetails: {
   alignItems: "flex-start",
   flex : 1,
   flexDirection: "column",
   alignItems: "center"
},

content: {
     width: (Metrics.width)-30,
     height: 100,
     borderRadius: 18,
     marginTop:35,
     paddingLeft: 15
},

title: {
     paddingBottom: 15,
     paddingTop: 15,
     paddingLeft: 15,
     color: "#000",
     fontWeight: "bold",
     fontSize: 14

},

pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
} ,

otherDetails: {
    width: (Metrics.width)-20,
    height: 100,
    borderRadius: 18,
    marginTop:35,
},

titles: {
   flexDirection: "row",
   justifyContent: "space-between"
},

subtitle: {
  color: "#000",
  fontWeight: "bold",
  fontSize: 14,
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight:20
},

subtitleValue: {
  color: "#000",
  fontSize: 14,
  paddingTop: 20,
  paddingLeft: 20,
   paddingRight:40
},

backView: {
   left: 15,
   top: 25,
   position :"absolute",
   width: 44,
   height: 44,
   backgroundColor: "#fff",
   opacity: 0.6,
   alignItems:"center",
   justifyContent: "center",
   borderRadius: 44/2
},

statsView: {
    width: (Metrics.width)-20,
    borderRadius: 18,
    marginTop:35,
    justifyContent: "center",
    bottom: 10

},

statsTitle: {
fontWeight: "bold",
   color: "#000",
   fontSize: 14,
     padding: 20,
},

statsViewContent: {
 flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between"
}


});
