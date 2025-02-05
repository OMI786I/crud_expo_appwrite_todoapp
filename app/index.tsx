import TaskRead from "@/components/TaskRead";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [text, onChangeText] = useState("");
  console.log(text);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Welcome to TODO app made with react Native and appwrite
          </Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="add a new task"
          />

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
              backgroundColor: "blue",
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {" "}
              Add Task +
            </Text>
          </TouchableOpacity>
        </View>

        <TaskRead />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 40,
  },
});
