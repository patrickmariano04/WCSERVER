<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">

            <router-link class="nav-link active" to="/">Home
            <span class="visually-hidden">(current)</span>
          </router-link>
        <li class="nav-item">
          <router-link class="nav-link" to="/Gallery">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/About">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
