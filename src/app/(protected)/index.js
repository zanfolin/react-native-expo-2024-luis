
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import TopBar from '../../components/TopBar';
import Actions from '../../components/ActionsApp';
import Pager from '../../components/PagerView';
import Constants from 'expo-constants';

export default function Home() {
    const statusBarHeight = Constants.statusBarHeight;
    
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <TopBar />
            <ScrollView style={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <Actions />
                <View style={styles.bannerContainer}>
                    <Pager />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa',
        paddingTop: Constants.statusBarHeight,
    },
    scrollViewContent: {
        height: '100%',
    },
    bannerContainer: {
        height: 520,
    },
});