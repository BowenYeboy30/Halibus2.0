 import * as React from "react";
 import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
 import { NativeStackScreenProps } from "@react-navigation/native-stack";
 import { RootStackParamList } from "../navigation/types";

 type Props = NativeStackScreenProps<RootStackParamList, "Setting">;

 export default function SettingScreen({ navigation }: Props) {
   const [textEnlarge, setTextEnlarge] = React.useState(false);
   const [textReader, setTextReader] = React.useState(false);

   return (
     <View style={styles.container}>
       <View style={styles.toggleRow}>
         <Text style={styles.label}>Text Enlarge</Text>
         <Switch
           value={textEnlarge}
           onValueChange={setTextEnlarge}
           trackColor={{ false: "#ccc", true: "yellow" }}
           thumbColor={textEnlarge ? "yellow" : "#f4f3f4"}
         />
       </View>

       <View style={styles.toggleRow}>
         <Text style={styles.label}>Text Reader</Text>
         <Switch
           value={textReader}
           onValueChange={setTextReader}
           trackColor={{ false: "#ccc", true: "yellow" }}
           thumbColor={textReader ? "yellow" : "#f4f3f4"}
         />
       </View>
            <View style={{ height: 600 }} />

       <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
         <Text style={styles.buttonText}>Back</Text>
       </TouchableOpacity>
     </View>
   );
 }

 const styles = StyleSheet.create({
   container: { flex: 1, justifyContent: "center", padding: 20 },
   toggleRow: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     marginBottom: 30,
   },
   label: { fontSize: 18, fontWeight: "500" },
   button: {
     backgroundColor: "#FFEE8C",
     paddingVertical: 12,
     borderRadius: 8,
     alignItems: "center",
     marginTop: 40,
   },
   buttonText: { fontSize: 16, fontWeight: "600", color: "#000" },
 });

