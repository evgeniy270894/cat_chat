<template>
  <v-app v-touch="{
      left: () => this.flag = false,
      right: () => this.flag = true
    }">
    <app-header v-model="flag"
    ></app-header>
    <v-content>
        <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from './components/AppHeader'
  export default {
    components:{
      AppHeader
    },
    data() {
      return {
        flag: false
      }
    }
  }
</script>
