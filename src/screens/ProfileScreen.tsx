import * as React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
 import {Ionicons} from '@react-native-vector-icons/ionicons';

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ route, navigation }: Props) {
  const initialName = route.params?.name ?? "Anonymous";
  const [name, setName] = React.useState(initialName);
  const [username, setUsername] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Ionicons name="person-outline" size={30} color="black" />
      </View>
<Text style={styles.boxtext}>
         Hi, user!
        </Text>
            <View style={{ height: 200 }} />


      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>View Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Payment Info</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30, width: "100%" }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Save and Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSection: {
    width: "100%",
    gap: 10,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
  },
  buttonGroup: {
    width: "100%",
    gap: 10,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  boxtext: {
      fontSize: 30,
      fontWeight: "600",
      color: "#000",
    },
});
