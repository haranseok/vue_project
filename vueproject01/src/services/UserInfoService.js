import Axios from 'axios'
import { GlobalStore } from '@/store/GlobalStore';

const url = process.env.VUE_APP_API_URL;
const globalStore = GlobalStore();


export class UserInfoService {
  static async getUserInfoByToken() {
    return await Axios.get(url + '/user/get_my_info',{ headers: globalStore.token })
  }
}
