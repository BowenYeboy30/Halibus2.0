
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Warning">;

export default function WarningScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚠️ Alert</Text>
      <Text style={styles.message}>
        Your current route will be delayed in excess of one hour!{"\n"}
        Would you like to switch to a faster route?
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Planning")}
      >
        <Text style={styles.buttonText}>Switch Route</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Cancel Route</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details", { itemId: 42 })}
      >
        <Text style={styles.buttonText}>Keep Current Route</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  message: { fontSize: 18, textAlign: "center", marginBottom: 40 },
  button: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
    width: "80%",
  },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#000", textAlign: "center" },
});
