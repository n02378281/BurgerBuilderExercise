import Axios from 'axios';

const instance = Axios.create({
    baseURL:'https://react-myburger-builder-7f70b.firebaseio.com/'
});

export default instance;