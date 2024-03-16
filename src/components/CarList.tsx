import React, {ReactNode, useState, useEffect} from 'react';
import Cars from "../models/Cars";
import {getCars, getCarsSearch} from '../service/CarService';
import {FlatList, Text, StyleSheet, View} from "react-native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../routes/RootStack';
import {AnyAction, Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../slice/FavoritesSlice";
import Car from "./atoms/Car";
import MyButton from "./atoms/MyButton";
import MyTextInput from "./atoms/MyTextInput";

type Props = NativeStackScreenProps<StackParamList>;

export interface CarListProps {
    cars: Array<Cars>;
}

function CarList({navigation}: Props): ReactNode {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const [lCars, setlCars] = useState<Array<Cars>>();
    useEffect((): void => {
        async function call(): Promise<void> {
            let cars: Cars[] = await getCars();
            setlCars(cars);
        }

        call()
    }, [])
    const [search, setSearch] = useState<string>("");
    useEffect((): void => {
        async function call(): Promise<void> {
            let cars: Cars[] = await getCarsSearch(search);
            setlCars(cars);
        }

        call()
    }, [search])
    let favLength = useSelector((state: RootState) => {
        return state.favorites.length;
    });

    return (
        <View style={styles.container}>
            <View>
                <MyButton text={"Ajouter une annonce"} handlePress={() => navigation.navigate('AddCar')}/>
                <MyButton text={"Mes favoris : " + favLength} handlePress={() => navigation.navigate('Favorite')}/>
            </View>
            <View>
                <MyTextInput
                           placeholder={"Rechercher une voiture"}
                           value={search}
                           onChangeText={(text: string) => {
                               setSearch(text);
                           }}
                />
            </View>
            <View>
                <Text>Nombres d'annonces :{lCars?.length} </Text>
            </View>
            <FlatList data={lCars} renderItem={({item}: { item: Cars }) =>
                (<View style={styles.container}>
                        <Car car={item}/>
                </View>)
            }/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        margin: 10,
    },
});

export default CarList;