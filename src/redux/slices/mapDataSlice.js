import { createSlice } from "@reduxjs/toolkit";


export const mapDataSlice = createSlice({
    name: 'mapData',
    initialState: {
        mapData: [],
        bookmark: [],
    },
    reducers: {
        setMapData: (state, action) => {
            state.mapData = action.payload;
        },
        addBookmark: (state, action) => {
            state.bookmark = action.payload;
        },
    }
})
export const selectmapData = {
    ...mapDataSlice.actions,
}

export const mapDataActions = mapDataSlice.actions;
export default mapDataSlice.reducer;