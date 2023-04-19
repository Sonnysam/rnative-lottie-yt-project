import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Image from "./components/Image";
import Subtext from "./components/Subtext";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={tw`flex-1 bg-white mt-[55] mx-4`}>
      <Image/>
      <Subtext/>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({});
