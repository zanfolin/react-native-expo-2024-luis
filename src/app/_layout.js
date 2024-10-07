import { router, Stack, useSegments } from "expo-router";
import { useEffect } from "react";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
const StackLayout = () => {
  const { user } = useAuth();
  const segments = useSegments();
  useEffect(() => {
    console.log("user", user);
    console.log("status", !user?.autenticated);

    if (!user?.autenticated) {
      console.log("deveria voltar");
      router.replace("/");
    } else {
      router.replace("(protected)");
    }
  }, [user]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
    </Stack>
  );
};
export default function Layout() {
  return (
    <AppProvider>
      <StackLayout />
    </AppProvider>
  );
}
