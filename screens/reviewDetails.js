import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ReviewDetails() {
  return (
    <View styles={styles.container}>
      <Text> ReviewDetails screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
