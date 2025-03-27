import React, {useState, useEffect} from "react";
import { View,Text, TextInput, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

    const [nome, setnome] = useState("");
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        carregarLista()
    },[])
    
    async function carregarLista() {
        const listaSalva = await AsyncStorage.getItem("nomes");
        setLista(JSON.parse(listaSalva))
        
    }

    async function geraNomeLista() {
        const novaLista = [...lista, { key: nome }];
        setLista(novaLista);
        setnome("");
        await AsyncStorage.setItem("nomes", JSON.stringify(novaLista));
    }
    async function Excluir_nome () {
        setLista(prevList => prevList.slice(0, -1))
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_filho}> 
                <TextInput placeholder='Digite seu nome' value={nome} onChangeText={setnome} style={styles.input}/>
                <TouchableOpacity style={styles.button} onPress={geraNomeLista}>OK</TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Excluir_nome}>Excluir ultimo nome</TouchableOpacity>
            </View>

            <View style={styles.container_filho}>
            
                <FlatList
                    data={lista}
                    renderItem={({ item }) => 
                        <View style={styles.item}>
                            <View style={styles.texto}>{item.key}</View>
                        </View>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingTop: 10,
        backgroundColor: "white",
    },
    container_filho:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: "50%",
    },
    item: {
        backgroundColor: "#f4f4f4",
        padding: 15,
        borderRadius: 8,
        borderColor: "black",
        borderWidth: 1,
        
    },
    texto: {
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    }
});