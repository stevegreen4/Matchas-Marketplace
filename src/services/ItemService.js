import axios from 'axios';

const http = axios.create({
    baseURL: "matchasmarketplacedb-production.up.railway.app"
});

export default {
    list() {
        return http.get('/item');
    },
    getById(id) {
        return http.get(`item/${id}`);
    }
}