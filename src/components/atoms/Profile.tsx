import React, {ReactNode} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import Cars from "../../models/Cars";

export interface CarProps {
    car: Cars;
}
export default function Profile ({car}:CarProps): ReactNode {

    return (
        <View style={styles.container}>
            <Image source={{uri: car.avatar}} style={styles.avatar}/>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{car.saler}</Text>
                <View style={styles.containerTest}>
                    <Text style={styles.details}>Pays : {car.country} </Text>
                    <Text style={styles.details}>Ville : {car.city} </Text>
                    <Text style={styles.details}>{car.phone} </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    containerTest: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderColor: 'green',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontWeight: 'bold',
    },
    details: {
        fontSize: 12,
    },
});