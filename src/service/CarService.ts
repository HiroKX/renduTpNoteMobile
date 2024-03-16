import Cars from "../models/Cars";
import {useSelector} from "react-redux";
import {RootState} from "../slice/FavoritesSlice";

export async function getCars(): Promise<Array<Cars>> {
    try {
        const res: Array<Cars> = [];

        const response = require('../data/data.json');
        //const lCar: Cars[] = useSelector((state:RootState) => state.newCar);
        //const response = [...(f1), ...(lCar)]

        response.map((value: any) => {
            res.push(
                {
                    id: value.id,
                    carMake: value.carMake,
                    carModel: value.carModel,
                    carModelYear: value.carModelYear,
                    price: value.price,
                    avatar: value.avatar,
                    saler: value.saler,
                    phone: value.phone,
                    country: value.country,
                    city: value.city,
                    description: value.description
                }
            )
        });
        return res;
    } catch (error: any) {
        console.log(`Error with function getCars ${error.message}`);
        throw error;
    }
}

export async function getCarsSearch(text: string): Promise<Array<Cars>> {
    try {
        const res: Array<Cars> = [];

        const response = require('../data/data.json');
        //const lCar: Cars[] = useSelector((state:RootState) => state.newCar);
        //const response = [...(f1), ...(lCar)]

        response.map((value: any) => {
                if (value.carMake.toLowerCase().includes(text.toLowerCase()) || value.carModel.toLowerCase().includes(text.toLowerCase())) {
                    res.push(
                        {
                            id: value.id,
                            carMake: value.carMake,
                            carModel: value.carModel,
                            carModelYear: value.carModelYear,
                            price: value.price,
                            avatar: value.avatar,
                            saler: value.saler,
                            phone: value.phone,
                            country: value.country,
                            city: value.city,
                            description: value.description
                        }
                    )
                }
            }
        )

        return res;
    } catch (error: any) {
        console.log(`Error with function getCars ${error.message}`);
        throw error;
    }
}


export async function getCar(id: string): Promise<Cars | undefined> {
    try {
        const res: Array<Cars> = [];

        const response = require('../data/data.json');
        //const lCar: Cars[] = useSelector((state:RootState) => state.newCar);
        //const response = [...(f1), ...(lCar)]

        response.map((value: any) => {
            if (value.id == id) {
                res.push(
                    {
                        id: value.id,
                        carMake: value.carMake,
                        carModel: value.carModel,
                        carModelYear: value.carModelYear,
                        price: value.price,
                        avatar: value.avatar,
                        saler: value.saler,
                        phone: value.phone,
                        country: value.country,
                        city: value.city,
                        description: value.description
                    }
                )
            }
        });
        return res.find((e) => {
            return e.id == id
        });
    } catch (error: any) {
        console.log(`Error with function getCar ${error.message}`);
        throw error;
    }
}
