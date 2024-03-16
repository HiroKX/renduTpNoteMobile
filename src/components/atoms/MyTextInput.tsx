import {StyleSheet} from "react-native";
import {TextInput, TextInputProps} from "react-native";
export function MyTextInput(props: TextInputProps) : ReactNode {
    return (
        <TextInput {...props} style={styles.textInput}>
        </TextInput>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default MyTextInput;