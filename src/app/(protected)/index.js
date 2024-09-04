import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TopBar from '../../components/TopBar';
import Pager from '../../components/PagerView';
import Actions from '../../components/ActionsApp';
import Constants from 'expo-constants';

export default function Home() {
    const statusBarHeight = Constants.statusBarHeight;
    return (

        <ScrollView style={styles.scrollViewContent}>
            <StatusBar style="dark" />
            <TopBar />
            <Actions />
            <Pager />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flex: 1,
        backgroundColor: "#ffa",
        paddingTop: Constants.statusBarHeight+5
    },
});
