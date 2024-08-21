import { View, Text, StyleSheet, TextInput } from 'react-native';
import {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
export default function AddDupla() {
    const [nome01, setNome01] = useState("Participante 01");
    const [nome02, setNome02] = useState("Participante 02");
    return (
        <View style={{ flex: 1, justifyContent:"center", alignItems:"center" }}>
            <View style={styles.containerAdd}>
                <TextInput onChangeText={setNome01} placeholder='entre com o nome aqui' style={styles.input} />
                <TextInput onChangeText={setNome02} placeholder='entre com o nome aqui' style={styles.input} />
                <TouchableOpacity style={styles.addDouble}>
                    <Text style={{color:"#fff"}}>Adicionar Dupla</Text>
                </TouchableOpacity>
                <View style={styles.dupla}>
                    <Text style={styles.name}>{nome01}</Text>
                    <Text style={styles.name}>{nome02}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=> router.back("/")} style={styles.voltar}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    containerAdd: {
        width: "90%",
        height: "90%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    dupla: {
        width: "100%",
        height: 200,
        backgroundColor: "#ccc",
        borderRadius: 5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    name: {
        fontSize: 20,
        fontFamily: "regular",
        marginVertical: 10,
    },
    voltar: {
        backgroundColor: "#ffa500",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    addDouble: {
        backgroundColor: "#007b",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    }
});