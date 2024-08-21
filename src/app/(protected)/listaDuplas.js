import { View, Text, Button } from 'react-native';
import { router } from "expo-router";
export default function List() {
    return (
        <View>
            <Text>Lista</Text>
            <Button title="Voltar" onPress={()=> router.back("/")} />
        </View>
    );
}