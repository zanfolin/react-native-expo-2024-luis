import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopBar from '../../components/TopBar';
import Pager from '../../components/PagerView';
import Actions from '../../components/ActionsApp';
export default function Home() {
    return (
        <ScrollView style={styles.scrollViewContent}>
            <TopBar />
            <Actions />
            <Pager />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        backgroundColor: "#ffa",
        height: "100%",
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
