import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        token: null,
        login:{
            username:'',
            password:''
        },
    }),
})