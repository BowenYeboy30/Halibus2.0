import * as React from "react";
 import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";
 import { NativeStackScreenProps } from "@react-navigation/native-stack";
 import { RootStackParamList } from "../navigation/types";
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import map from '../../assets/map.jpg';
 import {Ionicons} from '@react-native-vector-icons/ionicons';


 type Props = NativeStackScreenProps<RootStackParamList, "Home">;

 export default function HomeScreen({ navigation }: Props) {
   const [name, setName] = React.useState("");

   const handleTextChange = (text: string) => {
     setName(text);
     if (text.trim().toLowerCase() === "waterfront amc".toLowerCase()) {
       navigation.navigate("Planning");
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
           {/*}<Text style={styles.circleText}>P</Text> */}
           <Ionicons name="person-outline" size={30} color="black"/>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.circle}
           onPress={() => navigation.navigate("Setting")}
         >
                    <Ionicons name="cog-outline" size={35} color="black"/>

         </TouchableOpacity>

         <View style={styles.circle}>
           <Ionicons name="help-circle-outline" size={35} color="black"/>
         </View>

         <View style={styles.circle}>
           <Ionicons name="volume-high-outline" size={30} color="black"/>
         </View>
       </View>

            <View style={{ height: 620 }} />

       <View style={styles.contentArea}>
         <TextInput
           value={name}
           onChangeText={handleTextChange}
           placeholder="Where do you want to go?"
           style={styles.input}
         />

         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Planning", { itemId: 42 })}
         >
           <Text style={styles.buttonText}>71C                                       30 mins      ></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
/*
           onPress={() => navigation.navigate("Profile", { name })}
 */
         >
           <Text style={styles.buttonText}>61B                                       15 mins      ></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
/*
           onPress={() => navigation.navigate("Warning")}
 */
         >
           <Text style={styles.buttonText}>28X                                       26 mins      ></Text>
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

     borderRadius: 25,
     padding: 20,
     backgroundColor: "#aaaaaa",
   },
   input: {
     borderWidth: 1,
     borderColor: "#ccc",
     padding: 10,
     borderRadius: 8,
     backgroundColor: "#D3D3D3",

   },
   button: {
     backgroundColor: "#D3D3D3",
     paddingVertical: 12,
     paddingHorizontal: 20,
     borderRadius: 8,
     alignItems: "center",
     marginTop: 12,
     boxShadow: '5px 5px 10px rgba(0.3, 0.3, 0.3, 0.3)',
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

