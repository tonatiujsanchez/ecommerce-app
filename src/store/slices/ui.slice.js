import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
   name: 'ui',
   initialState: {
    showFilterSidebar: false
   },
   reducers: {
       setShowFilterSidebar: (state, action ) => {
           state.showFilterSidebar =  action.payload
       },
    }
});



export const { setShowFilterSidebar } = uiSlice.actions;