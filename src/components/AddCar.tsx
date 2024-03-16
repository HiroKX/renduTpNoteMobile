import React, {ReactNode, useState} from "react";
import {View} from "react-native";
import MyTextInput from "./atoms/MyTextInput";
import MyButton from "./atoms/MyButton";
import {addCar} from "../slice/FavoritesSlice";
import Cars from "../models/Cars";
import {AnyAction, Dispatch} from "redux";
import {useDispatch} from "react-redux";


/**
 * Tentative d'ajout d'une voiture, je bloque sur l'ajout dans le store afin de combiner.
 */
export default function AddCar(): ReactNode{
    const dispatch: Dispatch<AnyAction> = useDispatch();

    const [formData, setFormData] = useState<Cars>({
        id: '',
        carMake: '',
        carModel: '',
        carModelYear: '',
        avatar: '',
        price: '',
        saler: '',
        phone: '',
        country: '',
        city: '',
        description: ''
    });

    const handleInputChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        formData.id = "id" + Math.random();
        formData.price =  "€"+formData.price;
        dispatch(addCar(formData));
        console.log(formData);
    };

    return (
        <View>
            <MyTextInput
                value={formData.carMake}
                onChangeText={(text) => handleInputChange('carMake', text)}
                placeholder="Marque"
            />
            <MyTextInput
                value={formData.carModel}
                onChangeText={(text) => handleInputChange('carModel', text)}
                placeholder="Modèle"
            />
            <MyTextInput
                value={formData.carModelYear}
                onChangeText={(text) => handleInputChange('carModelYear', text)}
                placeholder="Année"
                keyboardType="numeric"
            />
            <MyTextInput
                value={formData.price}
                onChangeText={(text) => handleInputChange('price', text)}
                placeholder="Prix"
            />
            <MyTextInput
                value={formData.saler}
                onChangeText={(text) => handleInputChange('saler', text)}
                placeholder="Votre nom et prénom"
            />
            <MyTextInput
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
                placeholder="Numéro de téléphone"
            />
            <MyTextInput
                value={formData.country}
                onChangeText={(text) => handleInputChange('country', text)}
                placeholder="Pays"
            />
            <MyTextInput
                value={formData.city}
                onChangeText={(text) => handleInputChange('city', text)}
                placeholder="Ville"
            />
            <MyTextInput
                value={formData.description}
                onChangeText={(text) => handleInputChange('description', text)}
                placeholder="Déscriptif de l'annonce"
            />
            <MyButton text="Soumettre" handlePress={handleSubmit} />
        </View>
    );
}

