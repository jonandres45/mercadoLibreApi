import {createSlice} from '@reduxjs/toolkit';
import API from '../../api/api-mercadoLibre';

export const mercadoLibreSlice = createSlice({
    name:'mercadoLibre',
    initialState:{
        items: [],
        loading: false,
        userItem:false,
        total: 0,
        order: null,
    },
    reducers: {
        setItems: (state, action)=>{
            state.items = action.payload;
        },
        setUserItem:(state, action)=>{
            state.userItem = action.payload;
        },
        handleSpinner: (state)=>{
            state.loading = !state.loading;
        },
        setTotal: (state, action)=>{
            state.total = action.payload
        },
        setOrder: (state, action)=>{
            state.order = action.payload;
        }
    }
});

export const {setItems, setUserItem, setTotal, setOrder, handleSpinner} = mercadoLibreSlice.actions;

export default mercadoLibreSlice.reducer;

export const fetchItems = (item, offset = 0)=>(dispatch)=>{
    dispatch(handleSpinner());
    dispatch(setItems([]));
    dispatch(setOrder());
    API.get(`/${item}/${offset}`)
    .then((response)=>{
        dispatch(setItems(response.data));
        dispatch(setTotal(response.data[0].total))
        dispatch(handleSpinner());
    })
    .catch((error)=>console.log(error));
}