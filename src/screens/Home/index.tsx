import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState ('');

  function handleParticipantAdd(){
    if(participants.includes (participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome");
     }
     setParticipants(prevState => [...prevState, participantName]); 
     setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
   
    Alert.alert ("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim', 
        onPress: () => setParticipants(PrevState => PrevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);

    console.log(`Você clicou em remover o participante ${name}`)
  }

  //function handleState(value: string) {

    //setParticipantName(value);
   // console.log(participantName);
 //}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
      Gameplay and Party
        </Text>
        <Text style={styles.eventDate}>
        Quarta Feira, 6 de Março de 2024
        </Text>
       <View style={styles.form}>
        <TextInput
         style={styles.input}
         placeholder="Nome do participante"
         placeholderTextColor="#6B6B6B"
         onChangeText={setParticipantName}
         value={participantName}
         />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
     <Text style={styles.buttonText}>
      +
       </Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
        key ={item}
        name ={item}
        onRemove={() => handleParticipantRemove(item)} 
          />
        )}  
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>
            Ninguém participando do jogo ainda? Adicione jogadores a sua gameplay!;
          </Text>
        )}
    />
    </View>    
  );
}