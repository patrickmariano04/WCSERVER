<template>
  <div class="about">
      <h1>{{msg}}</h1>
        <p>Coffee trees are pruned short to conserve their energy and aid in harvesting, but can grow to more than 30 feet (9 meters) high. Each tree is covered with green, waxy leaves growing opposite each other in pairs. Coffee cherries grow along the branches. Because it grows in a continuous cycle, it’s not unusual to see flowers, green fruit and ripe fruit simultaneously on a single tree.</p>
      <h1>{{msg1}}</h1>
      <p>The term "milk tea" refers to any tea drink with milk added. It can be as simple as a splash of milk in a hot cup of tea, or it can be a complex recipe including various ingredients, like the popular bubble tea. Adding milk mellows and smooths out the flavors of tea, particularly some of the bitter notes found in black tea. Milk tea is enjoyed throughout the world as both a hot and cold beverage.</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'What is Coffee?',
      msg1: 'What is Milktea?'
    }
  }
}
</script>

<style scoped>
.about{
    background-color: aqua;
    margin: -60px 0px 0px 0px;
}
h1{
  font-size: 1.5em;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;

}

p{
  font-size: 1.5em;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;

}
</style>
