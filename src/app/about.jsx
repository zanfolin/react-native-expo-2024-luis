import { Text, View, Button } from 'react-native';
import { router } from 'expo-router';
export default function About() {
    return (
        <View>
            <Text>About</Text>
            <Button title='Voltar' onPress={() => (router.replace('/'))} />
        </View>
    )
}