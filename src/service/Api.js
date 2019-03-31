import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://api.thecatapi.com/',
    headers: {'Content-type': 'application/json', 'x-api-key': 'a988a020-0eb4-4513-b817-8306763c8e98'}
  })
}
