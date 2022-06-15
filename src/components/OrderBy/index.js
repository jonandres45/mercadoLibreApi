import React, {useState} from 'react';
import { Dropdown } from 'primereact/dropdown';

function OrderBy(){
    const [selectedCity1, setSelectedCity1] = useState(null);
    const onCityChange = (e) => {
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