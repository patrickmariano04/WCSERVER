<template>
<div class="gallery">
    <h1>{{gal}}</h1>

    <h2>COFFEE</h2>
    
     <img src="@/assets/04.jpg" alt="COFFEE">
    <p>CARAMEL MACCHIATO</p>
     
     <img src="@/assets/05.jpg" alt="COFFEE">
     <p>CAPPUCCINO</p>
     
     <img src="@/assets/06.jpg" alt="COFFEE">
    <p>AMERICANO</p>

    <h2>MILTEAS</h2>
    
     <img src="@/assets/01.jpg" alt="MILKTEA">
    <p>BOBA MILKTEA</p>
    
     <img src="@/assets/02.jpg" alt="MILKTEA">
    <p>MATCHA MILKTEA</p>
    
     <img src="@/assets/03.jpg" alt="MILKTEA">
     <p>THAI MILKTEA</p>
</div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      gal: 'COFFEE & MILKTEA Gallery'
    }
  }
}
</script>

<style>
.gallery{
    background-color: aqua;
    margin: -50px 0px 0px 0px;
}

h1 {
  text-align: center;
  margin: 50px 0px 0px 0px;
}

h2{
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;

}

p{
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
     margin: 0% 0% 0% 0%;
     
     
}

img{
  max-width: 20%;
  margin:  2% 0% 0% 40%;

}


</style>
