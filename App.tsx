import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./Navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </GestureHandlerRootView>
  );
}
