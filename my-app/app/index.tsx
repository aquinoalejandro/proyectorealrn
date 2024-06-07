import { Text, View, Button } from "react-native";
import {router} from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* BOTON PARA IR AL REGISTRO Y AL LOGIN*/}	
      <Button title="Register" onPress={() => router.push('/register')}/>
      <Button title="Login" onPress={() => router.push('/login')}/>
  
    </View>
  );
}
