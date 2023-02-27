import { LocalStorageTypes } from "@/models";
import { Person } from "@/models/Person";
import { getLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";
const initialState: Person[] = [];

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string) : initialState,
    reducers: {
        addFavorites: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return action.payload
        }
    }

})