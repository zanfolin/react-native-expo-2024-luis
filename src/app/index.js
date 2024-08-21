import { StatusBar } from "react-native";
import { Text, View, StyleSheet, ScrollView, Button, BackHandler } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
export default function App() {
    const { signIn } = useAuth();
    const handleEntrarSuper = async () => {
        try {
            await signIn({ username: "super", senha: "12345678" })
        } catch (error) {
            console.log(error)
        }
    }
    const handleEntrarUser = async () => {
        try {
            await signIn({ username: "user", senha: "12345678" })
        } catch (error) {
            console.log(error)
        }

    }
    const handleEntrarADM = async () => {
        try {
            await signIn({ username: "admin", senha: "12345678" })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={{ marginTop: 100, justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Text style={{ fontFamily: 'regular', fontSize: 25 }}>App funcionando para caralho</Text>
            <Button title="SignIn Super" onPress={handleEntrarSuper} />
            <Button title="SignIn User" onPress={handleEntrarUser} />
            <Button title="SignIn ADM" onPress={handleEntrarADM} />
            <Button title="Sobre" onPress={() => router.push('/about')} />
            <Button title='Sair do App' onPress={() => BackHandler.exitApp()} />
            <StatusBar style="auto" />
        </View>


    );
}
