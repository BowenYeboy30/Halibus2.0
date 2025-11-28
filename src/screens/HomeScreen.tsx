import * as React from "react";
 import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
 import { NativeStackScreenProps } from "@react-navigation/native-stack";
 import { RootStackParamList } from "../navigation/types";

 type Props = NativeStackScreenProps<RootStackParamList, "Home">;

 export default function HomeScreen({ navigation }: Props) {
   const [name, setName] = React.useState("");

   const handleTextChange = (text: string) => {
     setName(text);
     if (text.trim().toLowerCase() === "waterfront amc".toLowerCase()) {
       navigation.navigate("Details", { itemId: 42 });
     }
   };

   return (
     <View style={styles.container}>
       <View style={styles.circleContainer}>
         <TouchableOpacity
           style={styles.circle}
           onPress={() => navigation.navigate("Profile", { name })}
         >
           <Text style={styles.circleText}></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.circle}
           onPress={() => navigation.navigate("Details", { itemId: 42 })}
         >
           <Text style={styles.circleText}></Text>
         </TouchableOpacity>

         <View style={styles.circle}>
           <Text style={styles.circleText}></Text>
         </View>

         <View style={styles.circle}>
           <Text style={styles.circleText}></Text>
         </View>
       </View>

       <View style={styles.contentArea}>
         <TextInput
           value={name}
           onChangeText={handleTextChange}
           placeholder="Enter a name"
           style={styles.input}
         />

         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Details", { itemId: 42 })}
         >
           <Text style={styles.buttonText}>71C</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Profile", { name })}
         >
           <Text style={styles.buttonText}>Go to Profile (with param)</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Warning")}
         >
           <Text style={styles.buttonText}>Go to Test</Text>
         </TouchableOpacity>
       </View>
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
   contentArea: {
     marginTop: 500,
   },
   input: {
     borderWidth: 1,
     borderColor: "#ccc",
     padding: 10,
     borderRadius: 8,
     marginTop: 120,
   },
   button: {
     backgroundColor: "#D3D3D3",
     paddingVertical: 12,
     paddingHorizontal: 20,
     borderRadius: 8,
     alignItems: "center",
     marginTop: 12,
   },
   buttonText: {
     fontSize: 16,
     fontWeight: "600",
     color: "#000",
   },
 });

