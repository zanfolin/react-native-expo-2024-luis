import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button } from "react-native";
import { useAuth } from "../hooks/Auth";
export default function App() {
    const { signIn, signOut } = useAuth();


    return (
        <>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>App funcionando para caralho</Text>
                <Button title="SignIn Super" onPress={() => signIn({ email: "super@email.com", password: "Super123!" })} />
                <Button title="SignIn User" onPress={() => signIn({ email: "user@email.com", password: "User123!" })} />
                <Button title="SignIn ADM" onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })} />
                <Button title="SignOut" onPress={() => signOut()} />
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        backgroundColor: "#ffa",
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
