import { defineStore } from 'pinia';

export const UserInfoStore = defineStore('userInfoStore', {
    state: () => ({
        id: 0,
        name: "",
        username: "",
        profileImg: "",
    }),
    getters: {
        getInfo: (state) => state.info,
    },
    actions: {
        setter(item) {
            this.id = item.id
            this.name = item.name
            this.username = item.username
            this.profile_img = item.profile_img
        },
    },

})