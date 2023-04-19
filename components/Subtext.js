import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Subtext() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-4xl font-bold`}>Oops </Text>
      <Text style={tw`text-2xl font-semibold`}>Transaction failed!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
