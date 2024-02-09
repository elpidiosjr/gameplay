import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from './styles';

import { Participant } from "../../components/Participant";

export default function Home() {

  function handleParticipantAdd(){
    console.log("Voce clicou no botao de Adicionar!");
  }

  function handleParticipantRemove(name: string){
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
        </Text>
        <Text style={styles.eventDate}>
        Segunda Feira 5 de Fevereiro de 2024
        </Text>
       <View style={styles.form}>
        <TextInput
         style={styles.input}
         placeholder="Nome do participante"
         placeholderTextColor="#6B6B6B"
         
         />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
     <Text style={styles.buttonText}>
      +
       </Text>
      </TouchableOpacity>
    </View>
    <Participant name ="Bartolomeu" onRemove={() => handleParticipantRemove("Bartolomeu")} />
    <Participant name ="Simão" onRemove={() => handleParticipantRemove("Simão")} />
    <Participant name ="Tomé" onRemove={() => handleParticipantRemove("Tomé")} />
    <Participant name ="Judas Tadeu" onRemove={() => handleParticipantRemove("Judas Tadeu")} />
  </View>    
  );
}