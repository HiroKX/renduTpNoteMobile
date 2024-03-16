import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ReactNode} from 'react';
import CarList from '../components/CarList';
import CarDetail from '../components/CarDetail';
import Favorites from '../components/Favorites';
import AddCar from "../components/AddCar";

export type StackParamList = {
    'Liste des annonces': undefined;
    Detail: { idCar: string };
    Favorite: undefined;
    AddCar: undefined;
};

export const Stack = createNativeStackNavigator<StackParamList>();

function RootStack(): ReactNode {
    return (
        <Stack.Navigator initialRouteName='Liste des annonces'>
            <Stack.Screen name="Liste des annonces" component={CarList}/>
            <Stack.Screen name="Favorite" component={Favorites}/>
            <Stack.Screen name="AddCar" component={AddCar}/>
            <Stack.Screen name="Detail" component={CarDetail} initialParams={{idCar: "1"}}/>
        </Stack.Navigator>
    );
}

export default RootStack;