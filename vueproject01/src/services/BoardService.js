import Axios from 'axios'
import { GlobalStore } from '@/store/GlobalStore';
import { HttpCommunicator } from "@/api/HttpCommunicator";

const url = process.env.VUE_APP_API_URL;
const globalStore = GlobalStore();

export class BoardService {

    static async getList(page, limit) {
        const aaaa =  await HttpCommunicator.exec(url + '/board/list?page=' + page + '&limit=' + limit, "GET", {},{ headers: globalStore.token })
        return aaaa.data.data
    }

    static async doDeleteById(data) {
        return await HttpCommunicator.exec(url + '/board/delete', "POST", data,{ headers: globalStore.token })
    }

    static async doInsert(data) {
        return await HttpCommunicator.exec(url + '/board/create', "POST", data,{ headers: globalStore.token })
    }

    static async getOneById(params) {
        return await Axios.get(url + '/board/get_one', { params: params, headers: globalStore.token })
    }

    static async doUpdateById(data) {
        return await HttpCommunicator.exec(url + '/board/update', "POST", data,{ headers: globalStore.token })
    }
}
