import axios from 'axios';
import {BASE_URL} from '../constants/BASE_URL';
const endpoints = {
    get: BASE_URL + '/',
    add: BASE_URL + '/',
    modify: BASE_URL+ '/modify/',
    delete: BASE_URL + '/delete/',
    status: BASE_URL + '/status/'
}

const addItem = (itemValue) => {
    return axios.post(endpoints.add + itemValue);
}

const deleteItem = (id) => {
    return axios.delete(endpoints.delete + id);
}

const changeStatus = (id, statusValue) => {
    const itemId = endpoints.status.concat(id);
    return axios.post(itemId + '/'+statusValue);
}

const getList = () => {
    return axios.get(endpoints.get);
}

const modifyItem = (id, editValue) => {
    const modifyUrl = endpoints.modify.concat(id);
    return axios.post(modifyUrl+'/'+editValue);
}

export default {
    addItem,
    deleteItem,
    changeStatus,
    getList,
    modifyItem
};