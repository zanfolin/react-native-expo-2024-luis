import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
const DrawerLayout = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
      </GestureHandlerRootView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back("/")}>
          <Ionicons name="home" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(protected)/listaDuplas")}>
          <Ionicons name="list" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(protected)/procurarDuplas")}>
          <Ionicons name="search" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}
export default function Layout() {
  return DrawerLayout();
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "80%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffa500",
    position: "absolute",
    bottom: 20,
    left: 40,
    // Sombra para iOS
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 0, height: 4 }, // Offset da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 6, // Raio da sombra
    // Sombra para Android
    elevation: 8, // Elevação da sombra
  },
});