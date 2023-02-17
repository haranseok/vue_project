import Axios from 'axios'
import { useCounterStore } from '@/store/counter';
const counter = useCounterStore();

const url = process.env.VUE_APP_API_URL;

export class LoginService {

  static async doSignUp(userSignup) {
    return Axios.post(url + '/user/sign_up', userSignup)
  }

  static async doLogin(userData) {
    const sign_in = await Axios.post(url + '/user/sign_in', userData)
    counter.name = userData.username
    return sign_in;
  }
}