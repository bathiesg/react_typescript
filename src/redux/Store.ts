import { Person } from '@/models/Person';
import { configureStore } from '@reduxjs/toolkit';
import { peopleSlice, favoriteSlice } from './states';

export interface AppStore {
    people: Person[],
    favorites: Person[]
}


export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoriteSlice.reducer
    }
})