<template>
   <div class="Home">
    <h1>{{msg}}</h1>

    <img src="@/assets/coffee.jpg" alt="Coffee">
    <h2>Coffee drinkers all across the world are probably not thinking about the health benefits or risks of their favorite morning coffee. Despite this, this beverage has a lengthy history of controversy. The World Health Organization added coffee to its list of probable carcinogens in 1991.</h2>
   
   <img src="@/assets/milktea.jpg" alt="Milktea">
    <h2>Simply put, milk tea is tea with milk added. This gives the tea a smoother taste and slightly sweetens it. It's a common way to serve tea in many parts of the world, and it's a simple way to spice up your regular cup.</h2>
   </div>

    
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.Home{
    background-color: aqua;
    margin: -50px 0px 0px 0px;
}
h1 {
  text-align: center;
  margin: 50px 0px 0px 0px;
}

h2{
  font-size: 1.5em;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;

}

img{
  max-width: 50%;
  margin:  5% 0% 0% 25%;
}

</style>
