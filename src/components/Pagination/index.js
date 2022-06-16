import React, {useState} from 'react';
import { Paginator } from 'primereact/paginator';
import { useDispatch } from 'react-redux/es/exports';
import { fetchItems } from '../../features/mercadoLibre/mercadoLibreSlice';
import { useSelector } from 'react-redux';

function Pagination(){
    let userItem = useSelector((state)=>state.mercadoLibre.userItem);
    const dispatch = useDispatch();
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(30);
    const onBasicPageChange = (event) => {
        if(userItem){
            dispatch(fetchItems(userItem, event.first))
        }        
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    }
    return(
        <div>
            <Paginator 
                first={basicFirst} 
                rows={basicRows} 
                totalRecords={1000} 
                onPageChange={onBasicPageChange}
            />
        </div>
    )
}

export default Pagination;