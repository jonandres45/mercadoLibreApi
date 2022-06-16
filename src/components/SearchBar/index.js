
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button } from 'primereact/button';
import { fetchItems, setUserItem } from '../../features/mercadoLibre/mercadoLibreSlice';
function Searchbar (){
    const {userItem, loading} = useSelector((state)=>state.mercadoLibre);
    const dispatch = useDispatch();    
    const onSearchItem = (e)=>{
        e.preventDefault();        
        const data = Array.from(new FormData(e.target));
        const obj = Object.fromEntries(data) //Object.fromEntries nos toma un arreglo de 2 valores y lo 
        //transforma en un objeto por ejemplo ["nombre", "andres"] => {nombre: 'andres'}

        if(userItem !== obj.item){ //Ahorrando con cache
            dispatch(setUserItem(obj.item));
            dispatch(fetchItems(obj.item));
        }
    }

    return (
        <form onSubmit={onSearchItem}>
            <h5>Buscar articulo</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText 
                    placeholder="Buscar"
                    name='item'
                />
            </span>
            <Button 
                className='p-button-success'                
                loading={loading}
            >
                Buscar
            </Button>
        </form>        
    )
}

export default Searchbar;