// app 7
var app7 = new Vue({
    el: '#app-7',
    data () {
      return {
        info: null,
        errored: false,
        mes : {
            title: '',
            description: '',
            completed: false
        }
      }
    },
    mounted () {
      axios.get('http://127.0.0.1:8000/api/tasks')
        .then(response => {
          this.info = response.data,
          console.log(response.data)
        })
        .catch(error => {
            console.log(error)
            this.errored = true
          })
          // return "http://127.0.0.1:5500/main.html"
    },
  })





