import { Stack } from "expo-router";
import { AppProvider } from "../hooks";
import {View, StyleSheet, TouchableOpacity, Linking} from "react-native";
// import {Ionicons} from "@expo/vector-icons";
// import {FontAwesome} from "@expo/vector-icons";
export default function Layout() {
    // const abrirInstagram = () => {
    //     Linking.openURL('https://www.instagram.com/beachtennispiquerobi/');
    // }; 
    return (
        <>
            <AppProvider>
                <Stack />
            </AppProvider>
            
            {/* <View style={styles.bar}>
                <TouchableOpacity>
                    <Ionicons name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={abrirInstagram}>
                    <Ionicons name="logo-instagram" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="gear" size={30} color="white" />
                </TouchableOpacity>
            </View> */}
        </>

    );
}
const styles = StyleSheet.create({
    bar: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:"#ffa500",
    }
});