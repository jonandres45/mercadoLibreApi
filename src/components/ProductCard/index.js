import {Card} from 'primereact/card';
import { Image } from 'primereact/image';

function ProductCard({
    src,
    title,
    precio,
    condicion,
    stock,
}){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    const footer = ()=>{
        return (
            <div className='grid'>
                <div className='col'>
                    {condicion}
                </div>
                <div className='col'>
                    stock: {stock}
                </div>
            </div>
        )
    }
    return(                
        <Card title={title} footer={footer}>
            <Image src={src} alt={title} width="90" height="90" preview />
            <p>{formatter.format(precio)}</p>
        </Card>
    )
}

export default ProductCard;