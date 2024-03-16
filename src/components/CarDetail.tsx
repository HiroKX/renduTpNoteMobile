import React, {ReactNode, useState, useEffect} from 'react';
import {Text, StyleSheet, View} from "react-native";
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../routes/RootStack';
import {getCar} from '../service/CarService';
import Cars from "../models/Cars";
import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, removeFavorite, RootState} from '../slice/FavoritesSlice';
import {AnyAction, Dispatch} from "redux";
import Profile from '../components/atoms/Profile';
import MyButton from "./atoms/MyButton";


type Props = NativeStackScreenProps<StackParamList, 'Detail'>;

function CarDetail({route, navigation}: Props): ReactNode {
    const dispatch: Dispatch<AnyAction> = useDispatch();
    const [car, setCar] = useState<Cars>({
        id: "sansid",
        carMake: "",
        carModel: "",
        carModelYear: '2012',
        price: "",
        avatar: "",
        saler: "",
        phone: "",
        country: "",
        city: "",
        description: "",
    });

    useEffect((): void => {
        async function call(): Promise<void> {
            let carGet: Cars | undefined = await getCar(route.params.idCar);
            if (carGet != undefined)
                setCar(carGet);
        }

        call()
    }, [])

    let isFav: boolean = useSelector((state: RootState) => {
        return state.favorites.findIndex(elem => car.id == elem.id);
    }) > -1;

    useEffect((): void => {
        setFav(isFav)
    }, [isFav])

    const [fav, setFav] = useState<boolean>(isFav);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{car.carMake} {car.carModel}</Text>
                <Text style={styles.info}>Informations :</Text>
                <Text>Prix : {car.price}</Text>
                <Text>Année de fabrication : {car.carModelYear}</Text>
                <Text style={styles.info}>Vendeur :</Text>
                <Profile car={car}/>
                <Text style={styles.info}>Vendeur :</Text>
                <Text>{car.description}</Text>
            </View>
            <View>
                {fav ?
                    <MyButton text={"Retirer des favoris"} handlePress={() => {
                        dispatch(removeFavorite(car));
                        setFav(!fav);
                        navigation.goBack();
                        navigation.navigate('Favorite')
                    }}/>
                    :
                    <MyButton text={"Ajouter au favoris"} handlePress={() => {
                        dispatch(addFavorite(car));
                        setFav(!fav);
                        navigation.goBack();
                        navigation.navigate('Favorite')
                    }}/>}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
        margin: 10,
    },
    info: {
        marginTop: 12,
        marginBottom: 12,
        fontWeight: "bold",
        fontSize: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "center"
    },

});

export default CarDetail;