import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="login"/>
      <Stack.Screen name="signIn"/>
    </Stack>
  )
}
export default RootLayout
