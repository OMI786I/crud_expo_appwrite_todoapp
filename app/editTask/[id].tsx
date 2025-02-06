import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const taskId = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>id: {id}</Text>
    </View>
  );
};

export default taskId;

const styles = StyleSheet.create({});
