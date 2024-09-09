import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import TopBar from '../../components/TopBar';
import Constants from 'expo-constants';

export default function AddDupla() {
    const [nome01, setNome01] = useState("");
    const [nome02, setNome02] = useState("");
    const statusBarHeight = Constants.statusBarHeight;
    return (
        <View style={styles.cont}>
            <TopBar />
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text
                        onChangeText={setNome01}
                        placeholder='Jogador 1'
                        style={styles.input}
                        value={nome01}
                    />
                    <TextInput
                        onChangeText={setNome02}
                        placeholder='Jogador 2'
                        style={styles.input}
                        value={nome02}
                    />
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.buttonText}>Adicionar Dupla</Text>
                    </TouchableOpacity>
                    <View style={styles.duplaContainer}>
                        <Text style={styles.name}>{nome01}</Text>
                        <Text style={styles.name}>{nome02}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.back("/")} style={styles.backButton}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#ffa',
        paddingTop: Constants.statusBarHeight + 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa',
        padding: 20,
        paddingTop: Constants.statusBarHeight + 5
    },
    formContainer: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#d0d0d0',
        borderRadius: 8,
        padding: 12,
        marginVertical: 12,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    duplaContainer: {
        width: '100%',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 15,
        marginVertical: 20,
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: '#333',
        marginVertical: 8,
    },
    backButton: {
        backgroundColor: '#ff6f61',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#4caf50',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});
