import { ReactNode } from 'react';
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useSelector } from 'react-redux';
import {RootState} from "../slice/FavoritesSlice";
import Car from "./atoms/Car";
import Cars from "../models/Cars";

function Favorites(): ReactNode {
    const lFavorites: Cars[] = useSelector((state:RootState) => state.favorites);

    return (
        <View style={styles.container}>
            { lFavorites.length > 0 ?
                <FlatList data={lFavorites} renderItem={({ item }) =>
                    <Car car={item} />
                } />
                :
                <Text style={styles.title}>Vous n'avez pas de favoris</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginVertical: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    releaseDate: {
        fontStyle: "italic"
    }
});

export default Favorites;