import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Biblioteca de ícones
import { router } from 'expo-router';
import {useAuth} from "../../hooks/Auth";
export default function Perfil() {
    const {signOut} = useAuth();
    return (
        <ScrollView style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back('/')}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Perfil</Text>
                <TouchableOpacity onPress={() => { /* Ação para editar */ }}>
                    <Ionicons name="settings-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Seção de Perfil */}
            <View style={styles.profileSection}>
                <Image 
                    source={'../../assets/images/bannersite.png' } 
                    style={styles.profileImage} 
                />
                <Text style={styles.userName}>Nome do usuário</Text>
                <Text style={styles.userBio}>Aqui vai uma bio curta sobre o usuário.</Text>
            </View>

            {/* Estatísticas do Usuário */}
            <View style={styles.statsSection}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>12</Text>
                    <Text style={styles.statLabel}>Duplas</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>34</Text>
                    <Text style={styles.statLabel}>Jogos</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>56</Text>
                    <Text style={styles.statLabel}>Vitórias</Text>
                </View>
            </View>

            {/* Botões de Ação */}
            <View style={styles.actionsSection}>
                <TouchableOpacity style={styles.actionButton} onPress={() => { /* Ação para editar perfil */ }}>
                    <FontAwesome name="edit" size={20} color="#fff" />
                    <Text style={styles.actionButtonText}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} onPress={() => { /* Ação para ver duplas */ }}>
                    <FontAwesome name="users" size={20} color="#fff" />
                    <Text style={styles.actionButtonText}>Minhas Duplas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => {signOut(); console.log("saiu");}}>
                    <Ionicons name="exit-outline" size={20} color="#fff" />
                    <Text style={styles.actionButtonText}>Sair da Conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Cor de fundo clara
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffa500',
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 3, // Sombra para o cabeçalho
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileSection: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 2, // Sombra para a seção de perfil
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#ffa500',
        marginBottom: 10,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    userBio: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginVertical: 10,
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffa500',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    actionsSection: {
        padding: 20,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffa500',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 8,
    },
    actionButtonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8,
    },
});
