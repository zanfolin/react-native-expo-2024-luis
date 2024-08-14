import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { useAuth } from "../hooks/Auth";
import Actions from "../components/ActionsApp";
import Pager from "../components/PagerView";
import TopBar from "../components/TopBar";
export default function App() {
    // const { signIn, signOut } = useAuth();


    return (
        <>
            <ScrollView style={styles.scrollViewContent}>
                <TopBar />
                <Actions />
                <Pager />
                <StatusBar style="auto" />
            </ScrollView>
            {/* <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>App funcionando para caralho</Text>
                <Button title="SignIn Super" onPress={() => signIn({ email: "super@email.com", password: "Super123!" })} />
                <Button title="SignIn User" onPress={() => signIn({ email: "user@email.com", password: "User123!" })} />
                <Button title="SignIn ADM" onPress={() => signIn({ email: "adm@email.com", password: "Adm123!" })} />
                <Button title="SignOut" onPress={() => signOut()} />
            </View> */}
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
