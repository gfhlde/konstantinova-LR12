import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    name: 'student',
    age: 30,
    fetchdata: null,
    loading: false,
    firstname: '',
    secondname: '',
    sent: false,
    aradata: [
      { name: 'name1', salary: 300, age: 28 },
      { name: 'name2', salary: 400, age: 29 },
      { name: 'name3', salary: 500, age: 30 },
      { name: 'name4', salary: 600, age: 31 },
      { name: 'name5', salary: 700, age: 32 }
    ]
  }),
  actions: {
    informdata() {
      console.log('данная функция загружена')
    },
    async getApidata() {
      this.loading = true
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        this.fetchdata = result
        console.log(this.fetchdata)
      } catch (error) {
        console.error('Ошибка загрузки:', error)
      } finally {
        this.loading = false
      }
    },
    sendmessage() {
      let ContactForm = {
        title: this.firstname,
        body: this.secondname,
        userId: 1
      }
      
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(ContactForm),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          this.sent = true
          setTimeout(() => {
            this.sent = false
          }, 3000)
        })
    }
  }
})