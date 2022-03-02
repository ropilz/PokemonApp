import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import Types from "../components/pokemon-types/types"
import Abilities from "../components/pokemon-abilities/abilities"
import PieChart from "./PieChart";
import {getRgbaColor} from "../utils";
import styles from "./styles/pokemon-details";
import { CardView , StatsView,Row, PokemonAdditionDetails } from '../components/pokemon-details';

const PokemonDetails = ({navigation, route}) => {
//get params sent from navigation
const pokemon = route.params.pokemon;
const index = route.params.index;
const backgroundColor = route.params.backgroundColor;
const [modalVisible, setModalVisible] = useState(false);
const [selectedStartDate, setSelectedStartDate] = useState(null);

//display pokemon types by returning types component
const display_types = (pokemon) => {
  return <Types types={pokemon.types}/>
}
//display pokemon abilities by returning abilities component
const display_abilities=(pokemon)=>{
  return <Abilities abilities={pokemon.abilities}/>
}

return (
 <ScrollView style= {{flex: 1, backgroundColor: "#fff"}}>
    <View style={styles.container}>
      <CardView navigate={()=>{navigation.goBack()}}
                backgroundColor={getRgbaColor(backgroundColor,',0.6')}
                pokemonImage={pokemon.sprites.other.home.front_default}/>
      <Text style={styles.pokemonName}>{index} {((pokemon.name).charAt(0)).toUpperCase()}{(pokemon.name).slice(1)}</Text>

   <View style={styles.pokemonDetails}>
      <Row details={display_types(pokemon)}
           backgroundColor={getRgbaColor(backgroundColor,',0.2')}
           type="Type"/>

      <Row details={display_abilities(pokemon)}
                  backgroundColor={getRgbaColor(backgroundColor,',0.2')}
                  type="Abilities"/>

       <PokemonAdditionDetails backgroundColor={getRgbaColor(backgroundColor,',0.2')}
                               weight={pokemon.weight}
                               height={pokemon.height}/>

       <StatsView displayModal={()=>{setModalVisible(true)}}
                  backgroundColor={getRgbaColor(backgroundColor,',0.2')}/>

      </View>
       <PieChart pokemon = {pokemon} modalVisible={modalVisible} hideModal={()=>{setModalVisible(!modalVisible)}} />
   </View>
   </ScrollView>
  );
};


export default PokemonDetails;



