import React, { useState, useEffect } from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const[nome,setNome]=useState('');
    useEffect(()=>{
        carregarNome();
    },[]);

    async function carregarNome(){
        const nomeSalvo = await AsyncStorage.getItem('nome');
        if (nomeSalvo) setNome(nomeSalvo);
    }

    async function salvaNome(){
        await AsyncStorage.setItem('nome',nome);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Salvar Nome</Text>
            <TextInput style={styles.input} placeholder='Digite seu nome' value={nome} onChangeText={setNome}/>
            <Button title="Salvar"onPress={salvaNome}></Button>

        </View>

    )
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
    input: {
        borderWidth: 1,
        padding:10,
        width:200,
        marginBottom:10,
        borderRadius:5
    }
})