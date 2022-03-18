<template>
    <div id="skill">
        
        <h2>{{train}}</h2>
        <p>Concentrix Training</p>

        <h2>{{sem}}</h2>
        <p>IDONT HAVE SEMINARS</p>

        <h2>{{pl}}</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVA</li>
            </ul>
            <ul class="one">
                <li>PYTHON</li>
                <li>MY SQL</li>
                <li>JAVASCRIPT</li>
            </ul>
        
        
    
    </div>

    
</template>

<script>
export default {
    name: 'skill',
     data () {
    return {
        train:'TRAINING',
        sem:'SEMINARS',
        pl:'PROGRAMMING LANGUAGES'
      
    }
  }
}
</script>
<style>

</style>