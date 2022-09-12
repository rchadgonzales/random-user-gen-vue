const app = Vue.createApp({
  // template: '<h1>Hello World</h1>',
  // template: '<h1>Hello {{firstName}}</h1>',
  data() {
    return{
      // firstName: 'Tester'
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@awesome.com',
      gender: 'male',
      country: 'Earth',
      age: '22',
      picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    }
  },
  methods:{
    async getUser(){
      const res = await fetch('https://randomuser.me/api')
      const {results} = await res.json()
      // console.log(results)

      this.firstName = results[0].name.first,
      this.lastName = results[0].name.last,
      this.email = results[0].email,
      this.country = results[0].location.country,
      this.age = results[0].dob.age,
      this.gender = results[0].gender,
      this.picture = results[0].picture.large
    },
  },
})

app.mount('#app')

