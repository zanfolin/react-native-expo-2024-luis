import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopBar from "../components/TopBar";

export default function App() {
    // const qtdeDuplas = 10;
    // const qtdeHomens = 14;
    // const qtdeMulheres = 6;

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <TopBar />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.containerItems}>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="add" size={50} color="white" />
                        <Text style={styles.btnName}>Adicionar Dupla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="people" size={50} color="white" />
                        <Text style={styles.btnName}>Lista de Duplas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="search" size={50} color="white" />
                        <Text style={styles.btnName}>Procurar Duplas</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <View style={styles.estatisticas}>
                <Text style={styles.title}>Estatísticas</Text>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Quantidade de duplas: {qtdeDuplas}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Quantidade de homens: {qtdeHomens}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.item}>Quantidade de mulheres: {qtdeMulheres}</Text>
                </View>
            </View> */}
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    containerItems: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop:10,
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
        fontFamily: "semibolditalic",
    },
    estatisticas: {
        backgroundColor: "transparent",
        alignItems: "center",
        marginTop: 20,
    },
    item: {
        fontSize: 20,
        marginVertical: 10,
    },
    itemContainer: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 5,
    },
});
