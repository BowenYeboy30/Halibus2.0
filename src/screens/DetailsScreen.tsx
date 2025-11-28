import * as React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;
export default function DetailsScreen({ route, navigation }: Props) {
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxtext}>Board the PRT 71C {"\n"}Millvale bus</Text>
      </View>

      <View style={{ height: 643 }} />

      <View style={styles.boxRow}>
        <Text style={styles.boxtext1}>
          9:39         30         9.9{"\n"}Arrival     Min       Miles
        </Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "700" },
  paragraph: { fontSize: 16, lineHeight: 22, opacity: 0.8 },
  box: {
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
  },
  boxRow: {
    borderRadius: 20,
    padding: 12,
    backgroundColor: "#D3D3D3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxtext: { fontSize: 28 },
  boxtext1: { fontSize: 20, flex: 1 },
});
