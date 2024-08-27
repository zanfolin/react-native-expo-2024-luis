import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
const DrawerLayout = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
      </GestureHandlerRootView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.navigate("/")}>
          <Ionicons name="home" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(protected)/listaDuplas")}>
          <Ionicons name="list" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(protected)/podio")}>
          <Ionicons name="trophy" size={35} color="black" />
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
});