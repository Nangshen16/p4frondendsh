<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
         Ricettapp
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-item>
<!--        <b-navbar-item href="https://res.cloudinary.com/dcrioc0sw/image/upload/v1600732621/Screen_Shot_2020-09-21_at_7.56.30_PM_wwyf0r.png">-->
<!--          <router-link to="/Page2">About</router-link>-->
<!--        </b-navbar-item>-->
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="https://res.cloudinary.com/dcrioc0sw/image/upload/v1600733569/Screen_Shot_2020-09-21_at_8.12.37_PM_tshd28.png">
            About
          </b-navbar-item>
          <b-navbar-item href="https://www.linkedin.com/in/nang-shen-hom/">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="button is-black">
               <router-link to="/login" v-bind:URL="URL">Log in</router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>


</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
nav {
width: 80%;
margin: 10px auto;
}
.header {
    width: 90%;
    margin: 10px auto

}

</style>
