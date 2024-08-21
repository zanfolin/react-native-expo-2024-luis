import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';
export default function podio() {
    return (
        <View>
            <Text>Podio</Text>
            <Button title="Voltar" onPress={() => router.back("/")} />
        </View>
    )
}