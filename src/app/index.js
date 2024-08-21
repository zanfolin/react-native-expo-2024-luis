import { StatusBar } from "react-native";
import { Text, View, StyleSheet, ScrollView, Button, BackHandler } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
export default function App() {
    const { signIn } = useAuth();
    const handleEntrarSuper = async () => {
        try {
            await signIn({ email: "super@email.com", password: "Super123!" })
            router.replace("/")
        } catch (error) {
            console.log(e)
        }

    }
    const handleEntrarUser = async () => {
        try {
            await signIn({ email: "user@email.com", password: "User123!" })
            router.replace("/")
        } catch (error) {
            console.log(e)
        }

    }
    const handleEntrarADM = async () => {
        try {
            await signIn({ email: "adm@email.com", password: "Adm123!" })
            router.replace("/")
        } catch (error) {
            console.log(e)
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
