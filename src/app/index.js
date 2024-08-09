import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, StyleSheet, Linking } from "react-native";
import TopBar from "../components/TopBar";
import Pager from "../components/PagerView";
import Actions from "../components/ActionsApp";
export default function App() {
    // const qtdeDuplas = 10;
    // const qtdeHomens = 14;
    // const qtdeMulheres = 6;


    return (
        <>
         {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
            {/* <TopBar /> */}
            {/* <Actions /> */}
            {/* <Pager /> */}
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Text>App Funcionando</Text>
            </View>
            <StatusBar style="auto" />
        {/* </ScrollView> */}
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
