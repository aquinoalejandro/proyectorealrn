
import { View, Text, TextInput, Button} from "react-native";
import {router} from 'expo-router'
import { NativeBaseProvider } from "native-base";

function FakeSend() {
    return (
        <NativeBaseProvider>
        <View>
            <Text >An email has been sent to the account provided.</Text>

            <Button title= "Login" onPress={() => router.push('/login')}/>

        </View>
        </NativeBaseProvider>
    );
}

export default FakeSend