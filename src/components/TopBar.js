import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function TopBar() {
    return (
        <View style={styles.topBar}>
            <TouchableOpacity>
                <Ionicons name="menu" size={35} color="black" style={{ marginLeft: 30 }} />
            </TouchableOpacity>
            <Text style={styles.title}>BeachDuo</Text>
            <TouchableOpacity onPress={()=> router.push("/perfil")}>
                <Ionicons name="person" size={35} color="black" style={{ marginRight: 30 }} />
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    topBar: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffa500",
    },
    title: {
        fontSize: 35,
        fontFamily: "bolditalic",
        color: "black",
    }
});