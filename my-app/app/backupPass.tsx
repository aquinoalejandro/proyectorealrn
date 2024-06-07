import BackupForm from "../components/BackupForm";
import { View } from "react-native";

export default function Backup() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <BackupForm />
        </View>
    )
}