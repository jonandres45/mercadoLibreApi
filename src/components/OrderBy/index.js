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
                const ordenamiento = {new: 1, used: 2}; //modo en que se ordenaran
                newItems = newItems.sort(((a, b)=> ordenamiento[a.condition] - ordenamiento[b.condition]));
                break;
        }        
        dispatch(setItems(newItems));        
        setSelectedCity1(e.value);
    }

    const cities = [
        { name: 'Mayor a menor precio', code: 'DESC' },
        { name: 'Menor a mayor precio', code: 'ASC' },
        { name: 'Su condición', code: 'CONDICION' },
    ];

    return(
        <div>
            <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Ordenar por" />
        </div>
    );
}

export default OrderBy;