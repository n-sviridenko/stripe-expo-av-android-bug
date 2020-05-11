import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video, Audio } from 'expo-av';
import Stripe from 'tipsi-stripe';

Stripe.setOptions({});

const videos = {
  VIMEO: 'https://player.vimeo.com/play/1783259589?s=414482682_1589063018_5c43a6595ca7de02335cce251299e962&loc=external&context=Vimeo%5CController%5CApi%5CResources%5CUser%5CVideoController.&download=1&filename=Untitled139.mp4',
};

export default function App() {
  return <Video shouldPlay style={{ width: 200, height: 200 }} source={{ uri: videos.VIMEO }} useNativeControls />;
  return (
    <View style={styles.container}>
      <Video shouldPlay style={{ width: 200, height: 200 }} source={{ uri: videos.VIMEO }} useNativeControls />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
