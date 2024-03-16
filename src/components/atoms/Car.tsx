import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {ReactNode} from "react";
import {useNavigation} from "@react-navigation/native";
import Cars from "../../models/Cars";


export interface CarProps {
    car: Cars;
}
export default function Car({ car }: Readonly<CarProps>): ReactNode {
    const navigation: any = useNavigation<any>();
    return (
        <TouchableOpacity style={styles.car} onPress={() => navigation.navigate('Detail', {
            idCar: car.id,
        })}>
            <Text style={styles.title}>{car.carMake} {car.carModel}</Text>
            <Text style={styles.priceYear}>{car.carModelYear} - {car.price}</Text>
            <Text>{car.description}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    car:{
        marginTop: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    priceYear: {
        fontStyle: "italic"
    }
});