import { createContext, useEffect, useState, useContext } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, Text, ActivityIndicator} from "react-native";
const AuthContext = createContext({});
export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER"
}
export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        autenticated: null,
        user: null,
        role: null,
    });
    const { authUser } = useUsersDatabase();

    useEffect(() => {
        const loadStoragedData = async () => {
            const storagedUser = await AsyncStorage.getItem("@duplas:user");
            if (storagedUser) {
                setUser({
                    autenticated: true,
                    user: JSON.parse(storagedUser),
                    role: JSON.parse(storagedUser).role,
                });
            }
            else {
                setUser({
                    autenticated: false,
                    user: null,
                    role: null,
                });
            }
        };
        loadStoragedData();
    }, []);
    const signIn = async ({ username, senha }) => {
        const response = await authUser({ username, senha });
        if (!response) {
            setUser({
                autenticated: false,
                user: null,
                role: null,
            });
            throw new Error("Usuário ou senha inválidos");
        }
        await AsyncStorage.setItem("@duplas:user", JSON.stringify(response));
        setUser({
            autenticated: true,
            user: response,
            role: response.role,
        });
    };
    const signOut = async () => {
        await AsyncStorage.removeItem("@duplas:user");
        setUser({
            autenticated: false,
            user: null,
            role: null,
        })
    };
    if (user?.autenticated === null) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize:28, marginBottom:15 }}>Carregando Dados do Usuário...</Text>
                <ActivityIndicator size="large" color="#ffc500" />
            </View>
        )
    }
    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}