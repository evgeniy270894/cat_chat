<template>
  <v-container fluid grid-list-sm >
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat>
          <v-img
            :src="catUrl"
            aspect-ratio="1"
          >
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-text-field v-model="title"
                      @keydown.enter="postCat"
                      label="Описание"
                      autofocus
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-btn @click="postCat"
               color="primary">
          Опубликовать
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {database} from '@/service/firebase'
  import Api from '../service/Api'
  export default {
    name: "PostView",
    mounted () {
      this.getImage()
    },
    data() {
      return {
        catUrl: '',
        title: '',
        weekDay: ['Воскресенье', 'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу']
      }
    },
    methods: {
      async getImage(){
        try {
          const { data } = await Api().get(`v1/images/search?size=full`)
          this.catUrl = data[0].url
        }
        catch (e) {
          console.error('Ошибка при запросе картинки \n', e)
        }
      },
      async postCat () {
        try {
          await database.ref('chat').push({
            'url': this.catUrl,
            'comment': this.title,
            'info': `Опубликовано в ${this.weekDay[new Date().getDay()]} ${new Date().toLocaleDateString()}`,
            'created_at': new Date().getTime()
          })
          this.$router.push('/')
        } catch (e) {
          console.error('Ошибка при записи в базу', e)
        }
      }
    }
  }
</script>

<style scoped>
</style>
