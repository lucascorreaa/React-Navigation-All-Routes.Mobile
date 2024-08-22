import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View
      style={{
        height: 600,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 40}}>Profile Screen</Text>
    </View>
  );
}
