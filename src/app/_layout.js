import {
  router,
  Stack,
  useNavigation,
  usePathname,
  useSegments,
} from "expo-router";
import { useEffect } from "react";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";

const StackLayout = () => {
  const { user } = useAuth();
  const segments = useSegments();
  const pathname = usePathname();
  const navigation = useNavigation();

  useEffect(() => {
    console.log("\n\n\nLayout user", user);
    console.log("Layout navigation", navigation.getState());

    if (user?.autenticated === false) {
      router.replace("/");
    } else {
      router.push("(protected)");
    }
  }, [user]);

  useEffect(() => {
    console.log("Layout pathname", pathname);
  }, [pathname]);

  useEffect(() => {
    console.log("Layout segments", segments);
  }, [segments]);

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
