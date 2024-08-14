import {View, Text} from 'react-native';
import { useAuth } from '../../hooks/Auth';

export default function Home(){
    const {signOut} = useAuth();

    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <Text>Home</Text>
        <Button title='Sair' onPress={()=> signOut()} />
    </View>
}