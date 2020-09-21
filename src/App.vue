<template>
  <div id="app">
    <Header v-bind:URL="URL"/>

    <router-view
    @loggedIn="login($event)"
    v-bind:url="URL"
    :token="token"

    />
    <Footer/>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Carousel from ',/components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,



  },

  data:function(){
    return {
      loggedIn: false,
      token: '',
      URL: 'http://localhost:8000/'
  }
},
  methods: {
   login: function(event){
     console.log('event heard:');
     this.loggedIn = true;
     console.log("event",event)
     this.token = event.token;
     console.log("token",this.token);
     this.$router.push('/main');
    },
    logout: function(){
      this.loggedIn = false
      this.token = "";
    },
    signup: function(event) {
      console.log("registered!: ", event);
      this.loggedIn = true;
      console.log(event)
      this.token = event.token;
      this.$router.push("/main");
    },
  },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#footer {
  position: absolute;
  width: 100%;
  height: 2em;
  bottom: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
