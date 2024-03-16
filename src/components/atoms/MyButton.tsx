import {TouchableOpacity, Text, StyleSheet} from "react-native";
import React, {ReactNode} from "react";

interface MyButtonProps {
    text: string;
    handlePress: () => void; // ou bien une signature plus spécifique si nécessaire, par exemple (event: React.MouseEvent) => void
}

export default function MyButton({text, handlePress}: Readonly<MyButtonProps>): ReactNode {
    return (
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        paddingLeft: 30,
        paddingRight: 30,
        padding: 10,
        margin: 5,
        alignSelf: 'center',
        borderRadius: 60,
        alignItems: "center"
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

