
import { View, Text, TextInput, Button} from "react-native";
import {router} from 'expo-router'

function RegisterForm() {
    return (
        <View>
            <Text>
                Welcome! Please register your account.
            </Text>
            <TextInput
                placeholder="Username"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button title= "Register" onPress={() => router.push('/login')}/>
        </View>
    );
}

export default RegisterForm