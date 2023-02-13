import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        token: useStorage('token', {access_token:null}),
        username: useStorage('username',''),
    }),
})