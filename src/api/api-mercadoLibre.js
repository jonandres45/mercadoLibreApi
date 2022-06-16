import axios from 'axios';

export default axios.create({
    baseURL: 'https://mercado-jona.herokuapp.com/api/search'
})