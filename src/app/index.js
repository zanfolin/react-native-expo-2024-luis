import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopBar from "../components/TopBar";
import Pager from "../components/PagerView";
import Actions from "../components/ActionsApp";
export default function App() {
    // const qtdeDuplas = 10;
    // const qtdeHomens = 14;
    // const qtdeMulheres = 6;

    
    const abrirInstagram = () => {
        Linking.openURL('https://www.instagram.com/beachtennispiquerobi/');
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <TopBar />
            <Actions />
            <Pager />
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
