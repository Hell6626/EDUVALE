import React, {useState} from "react";
import { View,Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default  function App() {
    const [nome,setNome]=useState("");

    function confirmarEntrada(){
        if (nome.trim()===''){
            Alert.alert('Erro','Por favor digite seu nome!')
            console.log('Erro: Nome vazio');
            return;
        }
        Alert.alert(`Bem vindo, ${nome}!` )
        console.log(`Bem vindo, ${nome}!`)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem vindo ao App!</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <Button 
                title='Confirmar' 
                onPress={confirmarEntrada}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    titulo:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input:{
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginBottom: 10,
        borderRadius: 5,
    }
})