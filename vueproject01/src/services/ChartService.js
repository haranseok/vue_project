import Axios from 'axios'
const url = process.env.VUE_APP_API_URL;

export class ChartService {

  /**
   * 차트 리스트 가져오기
   * @returns {Promise<any>}
   */
  static async getList() {
    const data = await Axios.post(url + '/chart/list', {})
    return data.data
  }

}
