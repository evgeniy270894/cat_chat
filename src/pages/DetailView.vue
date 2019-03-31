<template>
  <v-container pa-0>
    <v-layout row wrap>
      <v-flex pa-3 class="text-xs-left" xs12>{{pictures.info || ''}}</v-flex>
      <v-flex xs12>
        <v-img
          :src="pictures.url || ''"
          aspect-ratio="1"
        >
          <v-container fill-height fluid px-1 py-0>
            <v-layout align-end justify-center row fill-height>
              <div class="px-3 py-2 text-xs-left opacity">
                <span class=" white--text">{{ pictures.comment || ''}}</span>
              </div>
            </v-layout>
          </v-container>
        </v-img>
      </v-flex>
      <v-flex pa-2 class="text-xs-center" xs12>
        <v-btn color="primary">Ответить</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {database} from '@/service/firebase'
  export default {
    name: "DetailView",
    created() {
      const chat = database.ref(`chat/${this.$route.params.id}`)
      chat.on('value', (snapshot) => {
        this.pictures =  snapshot.val()
        console.log(this.pictures)
      })
    },
    data() {
      return {
        pictures: {}
      }
    }
  }
</script>

<style scoped>
  .opacity {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
