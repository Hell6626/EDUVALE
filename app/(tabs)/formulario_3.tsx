import React, {useState} from "react";
import { View,Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default  function App() {
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const [resultadoSoma,setResultadoSoma]=useState(null);
    const [resultadoSubtrair,setResultadoSubtrair]=useState(null);
    const [resultadoMultiplicacao,setResultadoMultiplicacao]=useState(null);
    const [resultadoDivisao,setResultadoDivisao]=useState(null);

    function operacoesMatematicas(){
        const soma = parseFloat(num1)+parseFloat(num2);
        setResultadoSoma(soma);
        const subtrair = parseFloat(num2)-parseFloat(num1);
        setResultadoSubtrair(subtrair);
        const multiplicacao = parseFloat(num1)*parseFloat(num2)
        setResultadoMultiplicacao(multiplicacao)
        const divisao = parseFloat(num2)/parseFloat(num1)
        setResultadoDivisao(divisao)
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

            <Button 
                title='Somar' 
                onPress={operacoesMatematicas}
            /> 
            {resultadoSoma !== null && (
                <Text style={styles.resultado}>Resultado da soma: {resultadoSoma}</Text>
            )}
            {resultadoSubtrair !== null && (
                <Text style={styles.resultado}>Resultado da subtração: {resultadoSubtrair}</Text>
            )}
            {resultadoMultiplicacao !== null && (
                <Text style={styles.resultado}>Resultado da multiplicação: {resultadoMultiplicacao}</Text>
            )}
            {resultadoDivisao !== null && (
                <Text style={styles.resultado}>Resultado da divisão: {resultadoDivisao}</Text>
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
    }
})