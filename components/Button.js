import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

export default function Button() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <TouchableOpacity
        style={tw`
          justify-center
          items-center
          bg-red-300
          rounded-[10px]
          mx-w-[100%]
          h-[20]
          mx-4
          shadow-md
        `}
      >
        <Text
          style={tw`
          text-white
          font-bold
          text-2xl
        `}
        >
          Try again
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
