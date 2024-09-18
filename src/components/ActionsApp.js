import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function Actions() {
    return (
        <View style={styles.containerItems}>
            <TouchableOpacity style={styles.btn} onPress={() => router.push('/addDupla')}>
                <Ionicons name="add" size={50} color="white" />
                <Text style={styles.btnName}>Adicionar Dupla</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => router.push("/listaDuplas")}>
                <Ionicons name="people" size={50} color="white" />
                <Text style={styles.btnName}>Lista de Duplas</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    containerItems: {
        flexDirection: "row",
        justifyContent: "space-around",
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
    },
    btnName: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        marginTop: 10,
        fontFamily: "bolditalic",
    },
});