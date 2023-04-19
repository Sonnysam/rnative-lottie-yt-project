import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import tw from 'twrnc';

export default function Image() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <LottieView
        source={require('../assets/failed.json')}
        autoPlay
        loop
        style={tw`w-[200] h-[200]`}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
