<template>
  <div class="home" v-if="loggedIn">
    <button class="button is-danger" @click="getRecipes">Get Recipes</button>
    <h1>Recipes</h1>
    <Carousel :recipes="this.recipes"/>
    <div class="Rform">
      <input class ="input is-primary" type="text" v-model = "title" placeholder = "title"/>
      <input class ="input is-primary" type="text" v-model = "description" placeholder = "description" />
      <input class ="input is-primary" type="text" v-model = "cuisine" placeholder = "cuisine"/>
      <input class ="input is-primary" type="text" v-model = "user" placeholder = "user"/>
      <button class="button is-danger is-rounded" @click="createRecipe">Create Recipe</button>
      <button class="button is-danger is-rounded" @click ="updateRecipe(this.updateid)">Update Recipe</button>
    </div>

    <div class="Recipe" v-for="recipe in this.recipes" :key="recipe.id">
      <p>{{recipe.cuisine}}</p>
      <p>{{recipe.title}}</p>
      <p>{{recipe.description}}</p>
      <img src="https://res.cloudinary.com/dcrioc0sw/image/upload/v1600648405/p4pics_hdg6o4.webp" width="350" height="263">
      <img src="https://res.cloudinary.com/dcrioc0sw/image/upload/v1600649225/p4pic1_zqexbq.jpg" width="350" height="263">

    <div class="Ingredient" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
      <p>{{ingredient.title}}</p><br>
      <p>{{ingredient.category}}</p><br>
      <p>{{ingredient.calories}}</p><br>
      <p>{{ingredient.quantity}}</p><br>
      <p>{{ingredient.recipe}}</p><br>
    </div>
    <button class="button is-black" @click = "deleteRecipe(recipe.id)">Delete</button>
     <button class="button is-warning" @click="editRecipe(recipe)">Edit</button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components: {
   Carousel
  },
  props: ["token","loggedIn"],
data:function(){
    return {
      // loggedIn: false,
      URL: 'http://localhost:8000/',
      recipes: [],
      title : "",
      description: "",
      cuisine : "",
      user : "",
      updateid: "Lia",

  }},
methods: {
  deleteRecipe: function (id) {
    console.log("I'm deleting recipe",id)
     fetch(`http://localhost:8000/recipes/recipes/${id}`,{
     method: "delete",
     headers: {
       "Content-Type": "application/json",
       "Authorization" : `JWT ${this.token}`
     }}
     )

    .then((response) => {
          if (response.status !== 204) {
            //handle incorrect login
            response.json()
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data)
          if (data) {
            console.log("I just deleted recipe")
          } else {
            alert("Username or Password is incorrect")
          }
        });

  },
  updateRecipe: function(id) {
    console.log("I'm updating recipe",id)

    fetch(`http://localhost:8000/recipes/recipes/${id}`,{
     method: "put",
     headers: {
       "Content-Type": "application/json",
       "Authorization" : `JWT ${this.token}`
     },
     body: JSON.stringify({
       title: this.title,
       description: this.description,
       cuisine: this.cuisine,
       user: this.user
     })
   })
    .then((response) => {
          if (response.status !== 201) {
            //handle incorrect login
            response.json()
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data)
          if (data) {
            console.log("I just created recipe")
          } else {
            alert("Username or Password is incorrect")
          }
        });
  },
  editRecipe: function (recipe) {
    console.log("Recipe",recipe)
    this.title = recipe.title
    this.description = recipe.description
    this.cuisine = recipe.cuisine
    this.user = recipe.user
  },

  createRecipe: function () {
    console.log("I m getting recipe")
    console.log(this.title,this.description,this.cuisine,this.user,this.token)
    fetch(`http://localhost:8000/recipes/recipes/`,{
     method: "post",
     headers: {
       "Content-Type": "application/json",
       "Authorization" : `JWT ${this.token}`
     },
     body: JSON.stringify({
       title: this.title,
       description: this.description,
       cuisine: this.cuisine,
       user: this.user
     })
   })
    .then((response) => {
          if (response.status !== 201) {
            //handle incorrect login
            response.json()
          } else {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data)
          if (data) {
            console.log("I just created recipe")
          } else {
            alert("Username or Password is incorrect")
          }
        });
  },



  getRecipes: function(){
  console.log('this function is getting recipes', `our token is ${this.token}`)
  fetch(`http://localhost:8000/recipes/recipes/`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `JWT ${this.token}`
        },
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
          if (data) {
            console.log('this are our recipes', data);
             this.recipes = data.results;
             console.log(this.recipes,"Updated our recipes in vue");
          } else {
            alert("Sorry something went wrong and I can't get recipes")
          }
        });
        }

}
}
</script>
<style>


.home {
  width: 100%;
  padding: 10px;
  border: 30px solid #F85C70;
  margin: 0;
  background-color: lightpink;

}
img {
  max-width: 100%;
  height: auto;
  padding: 5px;
  vertical-align: middle;

}

.Recipe > p {
  width: 20%;
  padding: 10px;
  border: 5px solid #ECF87F;
  background-color: #AA1945;
  margin: 0;
  color: #F85C70;
  font-family: 'Amatic SC', cursive;
  font-size: 20px ;
}
.ingredient{
  display: grid;
  height: 400px;
  align-content: space-evenly;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}
.home > ingredient {
  background-color:palevioletred;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;

}






</style>

