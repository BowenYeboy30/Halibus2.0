import * as React from "react";
 import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";
 import { NativeStackScreenProps } from "@react-navigation/native-stack";
 import { RootStackParamList } from "../navigation/types";
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import map from '../../assets/map.jpg';

 type Props = NativeStackScreenProps<RootStackParamList, "Planning">;

 export default function PlanningScreen({ navigation }: Props) {
   const [name, setName] = React.useState("");

   const handleTextChange = (text: string) => {
     setName(text);
     if (text.trim().toLowerCase() === "waterfront amc".toLowerCase()) {
       navigation.navigate("Details", { itemId: 42 });
     }
   };

   return (
      <ImageBackground source={map} style={styles.background}>
     <View style={styles.container}>
       <View style={styles.circleContainer}>
         <TouchableOpacity
           style={styles.circle}
           onPress={() => navigation.navigate("Profile", { name })}
         >
           <Text style={styles.circleText}>P</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.circle}
           onPress={() => navigation.navigate("Setting")}
         >
           <Text style={styles.circleText}>S</Text>
         </TouchableOpacity>

         <View style={styles.circle}>
           <Text style={styles.circleText}>Q</Text>
         </View>

         <View style={styles.circle}>
           <Text style={styles.circleText}>R</Text>
         </View>
       </View>

       <View style={styles.contentArea}>
                 <TextInput
                   value="From: My Location                                   To: Waterfront AMC"
                   editable={false}
                   style={styles.input}
                 />

         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Details", { itemId: 42 })}
         >
           <Text style={styles.buttonText}>61D                                         6 mins      ></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button1}
/*
           onPress={() => navigation.navigate("Profile", { name })}
 */
         >
           <Text style={styles.buttonText}>61C                                       15 mins      ></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button2}
/*
           onPress={() => navigation.navigate("Warning")}
 */
         >
           <Text style={styles.buttonText}>53L                                       26 mins      ></Text>
         </TouchableOpacity>
       </View>
     </View>
     </ImageBackground>

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
          backgroundColor: "#D3D3D3",

   },
   button: {
     backgroundColor: "#5CE65C",
     paddingVertical: 12,
     paddingHorizontal: 20,
     borderRadius: 8,
     alignItems: "center",
     marginTop: 12,
   },
   button1: {
        backgroundColor: "#FFEE8C",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 12,
      },
  button2: {
       backgroundColor: "#FFA500",
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
    background: {
         flex: 1,
         resizeMode: 'cover',
         }
 });

