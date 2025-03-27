import {useState, useEffect} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logar() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    useEffect (() => {
        logando();
    },[]);
    

    async function logando(){
        const login = await AsyncStorage.getItem('usuario');
        const senhaSalva = await AsyncStorage.getItem('senha');
        if (login){
            setUsuario(login);
            if (senhaSalva) {
                setSenha(senhaSalva);
            }
        }
        
    }

    async function logado(){
        await AsyncStorage.setItem('usuario',usuario);
        navigation.navigate('Atividade1');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput style={styles.input} placeholder='Digite seu usuário' value={usuario} onChangeText={setUsuario}/>
            <TextInput style={styles.input} placeholder='Digite sua senha' value={senha} onChangeText={setSenha}/>
            <Button title="Login"onPress={logado}></Button>
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