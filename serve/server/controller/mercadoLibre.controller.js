const axios = require('axios');

exports.searchItem = async (req, res)=>{
    const data = req.params.data; //articulo a buscar
    const offset = req.params.offset; //El token free de mercado libre solo deja 1000 maximo
    const items = await getDataByItem(data, offset);
    res.status(200).send(items);
}

async function getDataByItem(data, offset = 0){
    const items = [];
    const endpoint = process.env.End_point;
    const parametros = offset > 0 ? `/search?q=${data}&offset=${offset}` : `/search?q=${data}`; 
    const req = await axios.get(`${endpoint}${parametros}`);
    const response = await req.data;

    const total = response.paging.total;

    response.results.map(item => items.push({
        total:total,
        id: item.id,
        title: item.title,
        price: item.price,
        currency_id: item.currency_id,
        available_quantity: item.available_quantity,
        thumbnall: item.thumbnail,
        condition: item.condition
    }));

    return items;
}
