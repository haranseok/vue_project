<template>
  <header>
    <div class="h_container">
      <div class="right">
        <span>{{this.name}}</span>
        <span><v-icon @click="logout">mdi-account-multiple-minus</v-icon></span>
        <v-icon class="cp">mdi-web</v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-item class="cp">
              <v-list-item-title @click="$i18n.locale='ko'">한국어</v-list-item-title>
            </v-list-item>
            <v-list-item class="cp">
              <v-list-item-title @click="$i18n.locale='en'">English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </header>
</template>
<script>

import { UserInfoStore } from "@/store/UserInfoStore";
const userInfo = UserInfoStore();

export default {
  data() {
    return {
      locale: false,
      name: userInfo.name,
      items: ['한국어', 'English'],
      userInfo
    }
  },
  mounted() {
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.$router.push('/')
    }
  }
  // props: { breadcrumbs : { type:Array, defualt: () => [] } }
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  .h_container {
    width: 90%;
    height: 60px;
    margin: 0 auto;
    align-items: center;
    text-transform: capitalize;
    font-weight: bold;
    display: flex;
    justify-content: end;
    align-items: center;
    .right {
      span {
        margin: 0px;
        cursor: pointer;
      }
    }
    .breadCrumbs {
      padding: 20px 0;
    }
  }
}
</style>