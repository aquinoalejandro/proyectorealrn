import { View, Text, TextInput, Button } from "react-native";
import { router } from 'expo-router'
function BackupForm() {
    return (
        <View>
            <Text>If you want to restore you password, please enter your email account</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            />

            <Button title="Restore" onPress={() => router.push('/fakesend')} />
        </View>
    );
}

export default BackupForm