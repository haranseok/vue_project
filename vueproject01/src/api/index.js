import Axios from 'axios'
import { useUserInfoStore } from '@/store/userInfo';


const url = process.env.VUE_APP_API_URL;
const headers = useUserInfoStore();

function login(userData) {
    return Axios.post(url+'/user/sign_in', userData)
}

function getListApi () {
    return Axios.get(url+'/board/list', {headers:headers.token})
}

function setDelete (id) { 
    return Axios.post(url+'/board/delete', id, {headers:headers.token})
}
 
function setCreateWrite (data) { 
    return Axios.post(url+'/board/create', data, {headers:headers.token})
}

function boardGetOne (params) {
    return Axios.get(url+'/board/get_one', {params: params, headers:headers.token})
}

export { login, getListApi, setDelete, setCreateWrite, boardGetOne }