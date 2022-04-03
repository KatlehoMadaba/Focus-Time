import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Focus} from './src/features/focus/Focus';

// You can import from local files

// or any pure javascript modules available in npm

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Build a timer</Text>
      ) : (
        <Focus/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252250"
  },
});
