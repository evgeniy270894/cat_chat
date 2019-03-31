<template>
    <div>
        <v-navigation-drawer v-model="drawer"
                             fixed
                             app>
            <v-list  class="pa-0">
                <router-link class="logo_link" tag="div" :to="{name: 'home'}">
                    <v-list-tile avatar class="py-1">
                        <v-list-tile-avatar>
                            <img src="../../static/img/icons/cropchat-icon-512x512.png">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>InstaCat</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>

            </v-list>

            <v-list v-for="(item, i) in menu"
                    :key="i"
                    two-line
                    class="py-0">
                <v-list-tile :to="item.route"
                             active-class="active__nav">
                    <v-list-tile-action>
                        <v-icon class="ml-2" color="primary">{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar color="primary" flat dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title @click="$router.push({name: 'home'})"
                             color="accent" class="logo_link">
              InstaCat
            </v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        props: {
          value: {
            type : Boolean,
          }
        },
        data() {
            return {
                drawer: false,
                menu: [
                    {
                        title: 'Главная',
                        icon: 'home',
                        route: '/'
                    },
                    {
                        title: 'Пост',
                        icon: 'cloud_upload',
                        route: '/post'
                    },
                ]
            }
        },
        watch: {
          value(val) {
            this.drawer = val
          },
          drawer(val) {
            this.$emit('input', val)
          }
        },
        methods: {}
    }
</script>

<style>
    .logo_link{
        cursor: pointer;
    }
    .active__nav {
      background-color: #0d0d0d0d;

    }
</style>
