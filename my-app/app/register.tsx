import RegisterForm from "../components/RegisterForm";
import { View } from "react-native";

export default function Register() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <RegisterForm />
        </View>
    )
}