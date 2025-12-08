import * as React from "react";
 import { View, Text, TextInput, StyleSheet, TouchableOpacity,ImageBackground } from "react-native";
 import { NativeStackScreenProps } from "@react-navigation/native-stack";
 import { RootStackParamList } from "../navigation/types";
 import {Ionicons} from '@react-native-vector-icons/ionicons';
import map from '../../assets/map3.png';


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
            <View style={{ height: 520 }} />
 <View style={styles.topCirclesRow}>
<View style={styles.largeCircle}>
    <Ionicons name="bus-outline" size={50} color="black" />
  </View>
<View style={styles.smallCircle}>
    <Ionicons name="car-outline" size={40} color="black" />
  </View>
<View style={styles.smallCircle}>
    <Ionicons name="bicycle-outline" size={38} color="black" />
  </View>
    </View>

       <View style={styles.contentArea}>
                 <TextInput
                   value=" From: My Location                         To: Waterfront AMC"
                   editable={false}
                   style={styles.input}
                 />

         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("Details", { itemId: 42 })}
         >
           <Text style={styles.buttonText}>61D                     30 mins to destination      ></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button1}
/*
           onPress={() => navigation.navigate("Profile", { name })}
 */
         >
           <Text style={styles.buttonText}>61C                      35 mins to destination     ></Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button2}
/*
           onPress={() => navigation.navigate("Warning")}
 */
         >
           <Text style={styles.buttonText}>53L                     46 mins to destination     ></Text>
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
     marginTop: 0,
     padding: 20,
     backgroundColor: "#aaaaaa",
     borderRadius: 25,

   },
   input: {
     borderWidth: 1,
     borderColor: "#ccc",
     padding: 10,
     borderRadius: 8,
          backgroundColor: "#D3D3D3",

   },
   button: {
     backgroundColor: "#5CE65C",
     paddingVertical: 12,
     paddingHorizontal: 20,
     borderRadius: 8,
     alignItems: "center",
     marginTop: 12,
     boxShadow: '5px 5px 10px rgba(0.3, 0.3, 0.3, 0.3)',

   },
   button1: {
        backgroundColor: "#FFEE8C",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 12,
        boxShadow: '5px 5px 10px rgba(0.3, 0.3, 0.3, 0.3)',

      },
  button2: {
       backgroundColor: "#FFA500",
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
         },
     topCirclesRow: {
       flexDirection: "row",
       justifyContent: "space-around",
       alignItems: "center",
     },
     largeCircle: {
       width: 90,
       height: 90,
       borderRadius: 45,
       backgroundColor: "#ffffff",
       justifyContent: "center",
       alignItems: "center",
     },
     smallCircle: {
         marginTop: 22,
       width: 70,
       height: 70,
       borderRadius: 45,
       backgroundColor: "#D3D3D3",
       justifyContent: "center",
       alignItems: "center",
     },

 });

