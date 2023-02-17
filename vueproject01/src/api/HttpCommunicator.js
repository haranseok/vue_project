import axios from 'axios'

export class HttpCommunicator {

  static async exec(url, method, params, header) {
    try {
      let res
      switch (method.toLowerCase()) {
        case "post":
          res = await axios.post(url, params, header)
          break;
        case "get":
          res = await axios.get(url, header)
          break;
      }

      return res;
    } catch (e) {
      alert(e.message)
    }

  }
}
