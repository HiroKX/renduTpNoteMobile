import {createSlice, PayloadAction, configureStore} from '@reduxjs/toolkit';

import Cars from '../models/Cars';


const initialState: Array<Cars> = [];

const favoriteSlice = createSlice({
    name: 'Favorites',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<Cars>) {
            state.push(action.payload);
        },
        removeFavorite(state, action: PayloadAction<Cars>) {
            let index: number = state.findIndex(elem => action.payload.id == elem.id);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
    },
});

const newCarSlice = createSlice({
    name: 'NewCar',
    initialState,
    reducers: {
        addCar(state, action: PayloadAction<Cars>) {
            state.push(action.payload);
        },
        removeCar(state, action: PayloadAction<Cars>) {
            let index: number = state.findIndex(elem => action.payload.id == elem.id);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
    },
});

const store = configureStore({
    reducer: {
        favorites: favoriteSlice.reducer,
        newCar: newCarSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export const {  addFavorite, removeFavorite} = favoriteSlice.actions
export const {  addCar , removeCar} = newCarSlice.actions

export {store};
