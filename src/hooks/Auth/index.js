import { createContext, useEffect, useState, useContext } from "react";
import { useUsersDatabase } from "../../database/useUsersDatabase";
const AuthContext = createContext({});
export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER"
}
export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        autenticated: false,
        user: null,
        role: null,
    });
    const { authUser } = useUsersDatabase();
    const signIn = async ({ username, senha }) => {
        const response = await authUser({ username, senha });
        if (!response) {
            setUser({
                autenticated: false,
                user: null,
                role: null,
            })
        } else {
            setUser({
                autenticated: true,
                user: response,
                role: response.role,
            });
        }
    };
    const signOut = async () => {
        setUser({
            autenticated: false,
            user: null,
            role: null,
        })
    };

    useEffect(() => {
        console.log("AuthProvider: ", user)
    }, [user]);

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