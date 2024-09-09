import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef } from 'react';
import { router } from 'expo-router';
import TopBar from '../../components/TopBar';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

export default function AddDupla() {
    const [nome01, setNome01] = useState("");
    const [nome02, setNome02] = useState("");
    const [showForm, setShowForm] = useState(false);
    const formTranslateY = useRef(new Animated.Value(500)).current;

    const showFormContainer = () => {
        setShowForm(true);
        Animated.timing(formTranslateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const hideFormContainer = () => {
        Animated.timing(formTranslateY, {
            toValue: 500,
            duration: 500,
            useNativeDriver: true
        }).start(() => setShowForm(false));
    };

    return (
        <View style={styles.cont}>
            <TopBar />
            <View style={styles.container}>
                <View style={styles.containerTextinhoExplicando}>
                    <Text style={styles.textinhoExplicando}>Adicione e controle duplas utilizando o nome de dois jogadores</Text>
                </View>
                {!showForm && (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={showFormContainer} style={styles.showFormButton}>
                            <Ionicons name="add" size={24} color="#ffffff" />
                            <Text style={styles.buttonText}>Adicionar dupla</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/listaDuplas')} style={styles.botaoIgualMasDiferente}>
                            <Ionicons name="list" size={24} color="#ffffff" />
                            <Text style={styles.buttonText}>Ver lista de duplas</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {showForm && (
                    <Animated.View style={[styles.formContainer, { transform: [{ translateY: formTranslateY }] }]}>
                        <TouchableOpacity onPress={hideFormContainer} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>×</Text>
                        </TouchableOpacity>
                        <TextInput
                            onChangeText={setNome01}
                            placeholder='Insira aqui'
                            style={styles.input}
                            value={nome01}
                        />
                        <TextInput
                            onChangeText={setNome02}
                            placeholder='Insira aqui'
                            style={styles.input}
                            value={nome02}
                        />
                        <View style={styles.duplaContainer}>
                            <Text style={styles.conferir}>Confira os nomes</Text>
                            <Text style={styles.name}>{nome01}</Text>
                            <Text style={styles.name}>{nome02}</Text>
                        </View>
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.buttonText}>Adicionar Dupla </Text>
                            <Ionicons name="add" size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <View style={styles.containerInfo}>
                            <Text style={styles.info}>
                                As duplas adicionadas vão aparecer na lista de duplas, para conferir, clique no botão dentro da caixa de ações
                            </Text>
                        </View>
                    </Animated.View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#ffa',
        paddingTop: Constants.statusBarHeight,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    containerTextinhoExplicando: {
        backgroundColor: '#ffa500',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        width: '100%',
        maxWidth: 400,
    },
    textinhoExplicando: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'bolditalic',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 400,
        marginBottom: 20,
    },
    showFormButton: {
        flexDirection: 'row',
        backgroundColor: '#2196f3',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
    },
    botaoIgualMasDiferente: {
        flexDirection: 'row',
        backgroundColor: '#ff9800',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
    },
    formContainer: {
        width: 430,
        maxWidth: 400,
        height: '80%', // Ajusta a altura para 80% da altura da tela
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    input: {
        width: '90%',
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
    conferir: {
        fontFamily: 'bolditalic',
        fontSize: 20,
        color: '#333',
        marginVertical: 8,
    },
    name: {
        fontFamily: 'bold',
        fontSize: 18,
        color: '#333',
        marginVertical: 8,
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
        fontFamily: 'bold',
        marginLeft: 8,
    },
    containerInfo: {
        backgroundColor: '#ffa500',
        padding: 15,
        width: '100%',
        borderRadius: 8,
        marginTop: 20,
    },
    info: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'bolditalic',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#ff6f61',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
