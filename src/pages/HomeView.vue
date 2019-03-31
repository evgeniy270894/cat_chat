<template>
  <v-container
    fluid
    grid-list-sm
    style="position: relative"
  >
    <v-layout row wrap>
      <v-flex v-for="(card, key) in chatItems"
              :key="key"
              @click="displayDetails(key)"
              xs4 sm4 md4>
        <v-card flat>
          <v-img :src="card.url"
                 aspect-ratio="1">
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-speed-dial
      v-model="fab"
      bottom
      right
      fixed
      direction="top"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="accent"
        medium
        dark
        fab
      >
        <v-icon large>add</v-icon>
      </v-btn>
      <v-btn
        small
        fab
        dark
        color="indigo"
      >
        <v-icon>photo</v-icon>
      </v-btn>
      <v-btn @click="$router.push({name: 'camera'})"
        small
        fab
        dark
        color="red"
      >
        <v-icon>camera_alt</v-icon>
      </v-btn>
      <v-btn @click="$router.push({name: 'post'})"
        small
        fab
        dark
        color="green"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-container>
</template>

<script>
  import {database} from '@/service/firebase'

  export default {
    data() {
      return {
        chatItems: '',
        fab: false,
        transition: 'slide-y-reverse-transition'
      }
    },
    created() {
      this.getInfo()
    },
    methods: {
      displayDetails(id) {
        this.$router.push({name: 'detail', params: {id: id}})
      },
      getInfo () {
        if (navigator.onLine) {
          this.getInfoFromFirestore()
        } else {
          this.chatItems = JSON.parse(localStorage.images)
        }
      },
      getInfoFromFirestore () {
        const chat = database.ref('chat')
        chat.on('value', async (snapshot) => {
          let list = snapshot.val()
          if (list) {
            this.chatItems = await Object.entries(list)
              .sort((a, b) => b[1].created_at - a[1].created_at)
              .reduce((obj, [k,v]) => ({...obj, [k]: v}), {})
            localStorage.images = JSON.stringify(this.chatItems)
          }
        })
      }
    }

  }
</script>

<style scoped>

</style>
