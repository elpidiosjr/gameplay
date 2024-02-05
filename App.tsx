import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    }}>
      <Text style={{
        color: '#fa7f72',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      }}>
        Nome do evento
        </Text>
        <Text style={{
        color: '#fa2f12',
        fontSize: 16,
      }}>
        Segunda Feira 5 de Fevereiro de 2024
        </Text>
    </View>    
  );
}


