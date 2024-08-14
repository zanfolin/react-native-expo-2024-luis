import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button, ScrollView, BackHandler } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
export default function App() {
    const { signIn, signOut } = useAuth();
    const handleEntrarSuper = async () => {
        try {
            await signIn({ email: "super@email.com", password: "Super123!" })
            router.replace("/")
        } catch (error) {
            console.log(e)
        }

    }

    return (
        <View style={{ justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Text>App funcionando para caralho</Text>
            <Button title="SignIn Super" onPress={handleEntrarSuper} />
            <Button title="SignIn User" onPress={() => signIn({ email: "user@email.com", password: "User123!" })} />
            <Button title="SignIn ADM" onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })} />
            <Button title="Sobre" onPress={() => router.replace('/about')} />
            <Button title='Sair do App' onPress={() => BackHandler.exitApp} />
            <StatusBar style="auto" />
        </View>
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
