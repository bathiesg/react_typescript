import { LocalStorageTypes } from "@/models";
import { Person } from "@/models/Person";
import { getLocalStorage, setLocalStorage } from "@/utilities/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";
const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state)
            return action.payload
        }
    }

})