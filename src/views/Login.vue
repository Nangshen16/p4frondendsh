<template>
  <div>
    <input class="input is-primary" type="text" v-model = "username"/>
    <input class="input is-primary" type ="password" v-model="password"/>
    <br/>
    <button class="button is-danger" @click="handleLogin">Log In</button>

  </div>
</template>

<script>


export default {
  name: 'Login',
  props: ["url"],
  data: function() {
    return {
      username: "",
      password: "",
      URL:"http://localhost:8000/" ,
    };
  },

  methods: {
    handleLogin: function() {
    console.log(this.username,this.password,this.urls)
     fetch(`http://localhost:8000/auth/users/login/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            //handle incorrect login
            response.json()
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data)
          if (data) {
            this.$emit("loggedIn", data)
            console.log(this.token,data)
          this.token = data.token
          console.log(this.token)
          } else {
            alert("Username or Password is incorrect")
          }
        });
    },
  },
};
</script>


<style>
#login-page {
  height: 100vh;
}

.login-form {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  top: 5em;
  margin: 0 auto;
  width: 60vw;
  max-width: 500px;
  min-width: 300px;
  background-color: white;
  border-radius: 1em;
  box-shadow: 0 4px 7px #b1b1b1;
}

.lfields {
  align-self: center;
  width: 90%;
  margin: 1em;
}
.login-form a {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 25%;
}
#signin:hover {
  color: #812286;
  animation: pulse ease-in-out 1s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@media only screen and (max-width: 400px) {
  .lfields {
    align-self: center;
    width: 90%;
    margin: 0.5em;
  }
  .login-form a {
    width: 50%;
  }
}
</style>
