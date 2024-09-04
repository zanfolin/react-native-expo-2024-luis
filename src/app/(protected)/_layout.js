import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../hooks/Auth/index';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CostumDrawerContent(props) {
  const { user, signOut } = useAuth();
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require("../../assets/images/logobeachduo.png")} style={{ width: 200, height: 200, alignSelf: "center", marginTop: 10, marginBottom: -30 }} />
      </View>
      <View>
        <Text style={{ fontSize: 20, textAlign: "center", fontFamily: "bold" }}>{user.user?.username || "Faça login"}</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={() => signOut()} style={{ justifyContent: "center", alignItems: "center", height: 50, backgroundColor: "#007bff", margin: 10, borderRadius: 10 }}>
        <Text style={{ color: "#fff", fontFamily: "regular" }}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CostumDrawerContent {...props} />}>
        <Drawer.Screen 
          name="index" 
          options={{ 
            drawerLabel: "Início", 
            drawerIcon: () => <Ionicons name="home" size={35} color="#000" />,
            headerShown: false, // Oculta o header
          }} 
        />
        <Drawer.Screen 
          name="addDupla" 
          options={{ 
            drawerLabel: "Adicionar Duplas", 
            drawerIcon: () => <Ionicons name="add-circle" size={35} color="#000" />,
            headerShown: false, // Oculta o header
          }} 
        />
        <Drawer.Screen 
          name="listaDuplas" 
          options={{ 
            drawerLabel: "Duplas", 
            drawerIcon: () => <Ionicons name="list" size={35} color="#000" />,
            headerShown: false, // Oculta o header
          }} 
        />
        <Drawer.Screen 
          name="perfil" 
          options={{ 
            drawerLabel: "Perfil", 
            drawerIcon: () => <Ionicons name="person" size={35} color="#000" />,
            headerShown: false, // Oculta o header
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

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
