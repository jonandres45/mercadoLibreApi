import React, {useState} from 'react';
import { Paginator } from 'primereact/paginator';
function Pagination(){
    const [basicFirst, setBasicFirst] = useState(0);
    const [basicRows, setBasicRows] = useState(10);
    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setBasicRows(event.rows);
    }
    return(
        <div>
            <Paginator first={basicFirst} rows={basicRows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onBasicPageChange}></Paginator>
        </div>
    )
}

export default Pagination;