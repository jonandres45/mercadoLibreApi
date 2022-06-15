import {Card} from 'primereact/card';

function ProductCard({
    src,
    title,
    precio,
    condicion,
    stock
}){
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
            <img src={src} alt={title}></img>
            <p>${precio}</p>
        </Card>
    )
}

export default ProductCard;