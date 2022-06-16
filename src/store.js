import {configureStore} from '@reduxjs/toolkit';
import mercadoLibreReducer from './features/mercadoLibre/mercadoLibreSlice';
export default configureStore({
    reducer: {
        counter: mercadoLibreReducer,
    },
})