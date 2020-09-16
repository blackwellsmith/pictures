import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8MMCFitGkYFysfNLzSbeIya97-7VW2BmuHZUkOgTiko'
    } 
})