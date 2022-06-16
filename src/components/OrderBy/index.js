import React, {useState} from 'react';
import { Dropdown } from 'primereact/dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../features/mercadoLibre/mercadoLibreSlice';

function OrderBy(){
    let items = useSelector((state)=>state.mercadoLibre.items);
    const dispatch = useDispatch();
    const [selectedCity1, setSelectedCity1] = useState(null);
    const onCityChange = (e) => {
        let newItems = [...items];
        switch(e.value.code){
            case 'ASC':
                newItems = newItems.sort(((a, b)=> b.price - a.price));
                break;
            case 'DESC':
                newItems = newItems.sort(((a, b)=> a.price - b.price));
                break;
            case 'CONDICION':
            case 'STOCK':
                newItems = newItems.sort(((a, b)=> a.stock - b.stock));
                break;
            case 'SINSTOCK':
                newItems = newItems.sort(((a, b)=> a.stock - b.stock));
                break;
        }        
        dispatch(setItems(newItems));        
        setSelectedCity1(e.value);
    }

    const cities = [
        { name: 'Mayor a menor precio', code: 'DESC' },
        { name: 'Menor a mayor precio', code: 'ASC' },
        { name: 'Su condición', code: 'CONDICION' },
        { name: 'En stock', code: 'STOCK' },
        { name: 'Sin stock', code: 'SINSTOCK' }
    ];

    return(
        <div>
            <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Ordenar por" />
        </div>
    );
}

export default OrderBy;