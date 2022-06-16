import React from 'react';
import { Paginator } from 'primereact/paginator';
import { useDispatch } from 'react-redux/es/exports';
import { fetchItems, setBasicFirst, setBasicRows } from '../../features/mercadoLibre/mercadoLibreSlice';
import { useSelector } from 'react-redux';

function Pagination(){
    let {userItem, total, basicFirst, basicRows} = useSelector((state)=>state.mercadoLibre);
    const dispatch = useDispatch();
    const onBasicPageChange = (event) => {
        if(userItem){
            dispatch(fetchItems(userItem, event.first))
        }
        console.log(event.first);
        dispatch(setBasicFirst(event.first));
        dispatch(setBasicRows(event.rows));
    }
    return(
        <div>
            {userItem ? 
                <Paginator 
                first={basicFirst} 
                rows={basicRows} 
                totalRecords={total > 100 ? 1000 : total}
                onPageChange={onBasicPageChange}
            /> : null}

        </div>
    )
}

export default Pagination;