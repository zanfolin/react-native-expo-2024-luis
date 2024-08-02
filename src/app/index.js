import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
export default function App() {
    return (
        <SafeAreaView style={{flex:1, alignItems:"center"}}>
            <Text style={{fontSize:35, fontWeight:"bold"}}>BeachDuo</Text>
            <StatusBar style="auto" />
            <View style={{width:"90%", height:100, backgroundColor:"#007bff", borderRadius:15}}>
                
            </View>
        </SafeAreaView>
    );
}