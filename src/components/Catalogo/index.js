import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

function Catalogo(){
    let items = useSelector((state)=>state.mercadoLibre.items);
    return (
        <>
        {items.map(item =>(              
            <div className='col-12 md:col-3 text-center ' key={item.id}>
                <ProductCard                    
                    src={item.thumbnall}
                    title={item.title}
                    precio={item.price}
                    condicion={item.condition}
                    stock={item.available_quantity}
                />
            </div>
          ))}   
          </>
    )
}

export default Catalogo;