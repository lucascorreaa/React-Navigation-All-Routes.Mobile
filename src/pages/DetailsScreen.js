import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen() {
  return (
    <View
      style={{
        height: 600,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 40}}>Details Screen</Text>
    </View>
  );
}
