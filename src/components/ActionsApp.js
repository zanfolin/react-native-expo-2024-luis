import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Actions() {
    const addDupla = () => {
        console.log("Adicionar dupla");
    };
    const listaDuplas = () => {
        console.log("Lista de duplas");
    };
    const procurarDuplas = () => {
        console.log("Procurar duplas");
    };
    const estatisticas = () => {
        console.log("Estatísticas");
    };
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.containerItems}>
                <TouchableOpacity style={styles.btn} onPress={addDupla}>
                    <Ionicons name="add" size={50} color="white" />
                    <Text style={styles.btnName}>Adicionar Dupla</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={listaDuplas}>
                    <Ionicons name="people" size={50} color="white" />
                    <Text style={styles.btnName}>Lista de Duplas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={procurarDuplas}>
                    <Ionicons name="search" size={50} color="white" />
                    <Text style={styles.btnName}>Procurar Duplas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={estatisticas}>
                    <Ionicons name="stats-chart" size={50} color="white" />
                    <Text style={styles.btnName}>Estatísticas</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    containerItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 10,
    },
    btn: {
        width: 160,
        height: 115,
        backgroundColor: "#ffa500",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    btnName: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        marginTop: 10,
        fontFamily: "bolditalic",
    },
});