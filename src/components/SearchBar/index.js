
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';
function Searchbar (){
    return (
        <div>
            <h5>Buscar articulo</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Buscar" />
            </span>
            <Button className='p-button-success'>Buscar</Button>
        </div>
    )
}

export default Searchbar;