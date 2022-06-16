import {createSlice} from '@reduxjs/toolkit';
import API from '../../api/api-mercadoLibre';

export const mercadoLibreSlice = createSlice({
    name:'mercadoLibre',
    initialState:{
        items: [],
        loading: false,
    },

    reducers: {
        setItems: (state, action)=>{
            state.items = action.payload;
        },
        handleSpinner: (state)=>{
            state.loading = !state.loading;
        }
    }
});

export const {setItems} = mercadoLibreSlice.actions;

export default mercadoLibreSlice.reducer;

export const fetchItems = (item, offset)=>(dispatch)=>{
    dispatch(handleSpinner());
    dispatch(setItems([]));
    API.get(`/${item}/${offset}`)
    .then((response)=>{
        dispatch(setItems(response.data));
        dispatch(handleSpinner());
    })
    .catch((error)=>console.log(error));
}