import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
export default function Actions() {
    const { signOut } = useAuth();
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.containerItems}>
                <TouchableOpacity style={styles.btn} onPress={() => router.push('/addDupla')}>
                    <Ionicons name="add" size={50} color="white" />
                    <Text style={styles.btnName}>Adicionar Dupla</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => router.push("/listaDuplas")}>
                    <Ionicons name="people" size={50} color="white" />
                    <Text style={styles.btnName}>Lista de Duplas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => signOut()}>
                    <Ionicons name="exit-outline" size={50} color="white" />
                    <Text style={styles.btnName}>Sair da conta</Text>
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