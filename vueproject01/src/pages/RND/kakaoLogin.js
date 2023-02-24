import axios from 'axios'

const kakaoHeader = {
    'Authorization': '929136f8bc395f6a3ce07ad42d4a9713',
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};
const getKakaoToken = async (code) => {
    console.log('doKakaoLogin');
    try {
        const data = {
            grant_type: 'authorization_code',
            client_id: '041576102e9613c9acb57fb766533896',
            redirect_uri: 'http://192.168.0.90:81/user',
            code: code,
        };
        // const queryString = Object.keys(data)
        //     .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        //     .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', data.code, { headers: kakaoHeader });
        console.log('카카오 토큰', result);
        return result;
    } catch (e) {
        return e;
    }
};

export { getKakaoToken }