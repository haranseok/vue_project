import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const GlobalStore = defineStore('globalStore', {
    state: () => ({
        token: useStorage('token', { access_token: null }),
        username: useStorage('username', ''),
        locales: "en",
    }),
})