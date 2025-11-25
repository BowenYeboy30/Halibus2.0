import * as React from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [name, setName] = React.useState("Dmitriy");

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("Details", { itemId: 42 })}>
          <Text style={styles.circleText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.circle} onPress={() => navigation.navigate("Profile", { name })}>
          <Text style={styles.circleText}></Text>
        </TouchableOpacity>

        <View style={styles.circle}>
          <Text style={styles.circleText}></Text>
        </View>

        <View style={styles.circle}>
          <Text style={styles.circleText}></Text>
        </View>
      </View>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter a name"
        style={styles.input}
      />

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { itemId: 42 })}
      />
      <View style={{ height: 12 }} />
      <Button
        title="Go to Profile (with param)"
        onPress={() => navigation.navigate("Profile", { name })}
      />
      <View style={{ height: 12 }} />
      <Button
        title="Go to Test"
        onPress={() => navigation.navigate("test")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12, justifyContent: "center" },
  circleContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  circleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  title: { fontSize: 28, fontWeight: "700" },
  paragraph: { fontSize: 16, lineHeight: 22, opacity: 0.8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginTop: 120,
  },
});

