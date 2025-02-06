import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { upDateDocuments } from "@/lib/appwrite";

const taskId = () => {
  const [text, onChangeText] = useState("");
  const [status, setStatus] = useState(false);
  const { id } = useLocalSearchParams();

  const updateData = () => {
    const toSendData = {
      tasks: text,
      complete: status,
    };

    const result = upDateDocuments(toSendData.tasks, toSendData.complete, id);
    console.log(result);
    console.log(toSendData);
  };

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
            id: {id}
          </Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="add a new task"
          />

          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
                backgroundColor: "blue",
                padding: 10,
              }}
              onPress={() => setStatus(true)}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Completed!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
                backgroundColor: "blue",
                padding: 10,
              }}
              onPress={() => setStatus(false)}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Not Completed!
              </Text>
            </TouchableOpacity>
          </View>

          {status ? <Text>Completed</Text> : <Text>In Complete</Text>}

          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
              backgroundColor: "blue",
              padding: 10,
            }}
            onPress={() => updateData()}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Update Task
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default taskId;

const styles = StyleSheet.create({});
