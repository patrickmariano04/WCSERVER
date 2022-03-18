<template>
    <div id="app">
  
    <profile></profile>
    <education></education> 
    <skills></skills>
    </div>
</template>

<script>

import Profile from './components/Profile.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components:{
    Profile,
    Education,
    Skills
    
  }
}
</script>

