import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3a56c.firebaseio.com/'
});

export default instance;