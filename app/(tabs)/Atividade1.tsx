import {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Atividade1() {
  const navigation = useNavigation();
    const[usuario,setUsuario]=useState('');

  useEffect(() => {
    carregarNome()
  },[])
  
  async function carregarNome(){
    const login = await AsyncStorage.getItem('usuario');
    setUsuario(login);
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo {usuario}</Text>
      <Button title="Voltar para Login" onPress={() => navigation.navigate('Logar')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
