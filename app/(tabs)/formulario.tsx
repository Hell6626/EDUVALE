import React, {useState} from "react";
import { View,Text, TextInput, Button, StyleSheet } from "react-native";

export default  function App(){
    const [nome,setNome] = useState<string>('');
    const [cidade,setCidade] = useState<string>('');
    const [idade,setIdade] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>("");
    
    const handlePress = () => {
        setMensagem( `Seu nome é ${nome}\nsua cidade é ${cidade}\nsua idade é ${idade}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Digite algo:
            </Text>
            <TextInput style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput style={styles.input}
                placeholder="Cidade"
                value={cidade}
                onChangeText={setCidade}
            />
            <TextInput style={styles.input}
                placeholder="Idade"
                value={idade}
                onChangeText={setIdade}
            />
            <Button title="Enviar" onPress={handlePress}></Button>
            {mensagem ?<Text style={styles.resultado}>{mensagem}</Text>:null}
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor:'#f5f5f5'
    },

    titulo: {
        fontSize: 12,
        marginBottom: 10,
    },
    
    input: {
        width: "75%",
        height: "10%",
        borderColor:"#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom:10,
        backgroundColor:"#fff",
    },
    
    resultado: {
        marginTop: 10,
        fontSize: 18,
        color: 'red',
    }

})

