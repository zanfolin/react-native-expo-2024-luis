import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
            <TopBar />
            <ScrollView horizontal={true}>
                <View style={styles.containerItems}>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="add" size={50} color="white" />
                        <Text style={styles.btnName}>adicionar dupla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="people" size={50} color="white" />
                        <Text style={styles.btnName}>Lista de duplas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="search" size={50} color="white" />
                        <Text style={styles.btnName}>Procurar Duplas</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.carrossel}></View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    title: {
        fontFamily: "regular",
        fontSize: 40
    },
    containerItems: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        display: "flex",
        top: 30,
        gap:25
    },
    btn: {
        width: 160,
        height: 115,
        backgroundColor: "#ffa500",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    btnName:{
        textAlign:"center",
        color: "white",
        fontSize: 20,
        fontFamily: "bold",
    }
});