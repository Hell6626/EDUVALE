import React, {useState} from "react";
import { View,Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default  function App() {
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [resultado,setResultado]=useState(null);
    const [nome, setNome]=useState("");

    function soma(){
        const soma = parseFloat(num1)+parseFloat(num2);
        setResultado(soma);
        setNome('soma')
    }
    function subtracao(){
        const subtrair = parseFloat(num2)-parseFloat(num1);
        setResultado(subtrair);
        setNome("subtração")
    }
    function multiplicacao(){
        const multiplicacao = parseFloat(num1)*parseFloat(num2)
        setResultado(multiplicacao)
        setNome("multiplicação")
    }
    function divisao(){
        const divisao = parseFloat(num2)/parseFloat(num1)
        setResultado(divisao)
        setNome("divisão")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem vindo ao App!</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o primeiro numero"
                value={num1}
                onChangeText={setNum1}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o segundo numero"
                value={num2}
                onChangeText={setNum2}
            />
            <View style={styles.container_botao}> 
                <Button title='Somar' onPress={soma}/>
                <Button title='Subtração' onPress={subtracao}/>
                <Button title='Multiplicação' onPress={multiplicacao}/>
                <Button title='Divisão' onPress={divisao}/>
            </View>

            {resultado !== null && (
                <Text style={styles.resultado}>Resultado da {nome}:{resultado}</Text>
            )}
            
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
    },
    resultado:{
        fontSize: 20,
        color: "green",
        fontWeight: "bold",
        marginTop: 20,
    },
    container_botao:{
        width: 500,
        height: 100,
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-evenly",
    }
})