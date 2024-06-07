
import { View, Text, TextInput, Button} from "react-native";
import {router} from 'expo-router'

function LoginForm() {
    return (
        <View>
            <Text>
                Welcome back! Please login.
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
            <Text onPress={() => router.push('/backupPass')} >Forgot your password?</Text>

            <Button title= "Login" onPress={() => router.push('/task')}/>

        </View>
    );
}

export default LoginForm