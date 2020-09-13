import { StatusBar } from "expo-status-bar";
import React from "react";
// import { Text, View } from "react-native";
import { SchoolProvider } from "./context";
import Calender from "./components/Calender";


export default function App() {
  return (
    <SchoolProvider>
      <Calender colors="#4630EB" />
    </SchoolProvider>
  );
}
