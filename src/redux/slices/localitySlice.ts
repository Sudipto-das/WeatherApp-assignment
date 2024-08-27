import { localitiesType } from "@/data/localities";
import { createSlice } from "@reduxjs/toolkit";


interface LocalityState {
    selectedLocality: localitiesType | null
}
const initialState: LocalityState = {
    selectedLocality: null
}
const localitySlice = createSlice({
    name: 'Locality',
    initialState: initialState,
    reducers: {
        setSelectedLocality: (state, action) => {
            state.selectedLocality = action.payload
        }
    }
})


export const { setSelectedLocality } = localitySlice.actions;
export default localitySlice.reducer; 