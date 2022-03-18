<template>
  <div id="educ">
    <form id="schl"> <br/>
  
    <h2>{{level2}}</h2>
    <p>Holy Angel University (HAU)</p>
    <p>#1 Holy Angel St, Angeles, 2009 Pampanga</p>
    <p>School Year: 2020 up to present</p>

    <h2>{{level1}}</h2>
    <p>Systems Plus College Foundation (SPCF)</p>
    <p>Balibago, Angeles, Pampanga</p>
    <p>School Year: 2020-2018</p>

    <h2>{{level}}</h2>
    <p>Magalang Christian Ecumenical School INC.</p>
    <p>Marbea Subd., Sta. Cruz, 2011 Magalang, Pampanga</p>
    <p>School Year: 2018-2014</p>
   </form> <br/>
  </div>
 
</template>

<script>

export default {
  name: 'educ',

  data () {
    return {
        level:'JUNIOR HIGHSCHOOL',
        level1:'SENIOR HIGHSCHOOL',
        level2:'COLLEGE'
      
    }
  }
  
}
</script>

<style>
#schl{
  border: none;
  margin-bottom: -40%;
}

li{
  font-size: 1.2em;
  margin-left: 15%;
}
#skill{
  font-size: 1em;
}
</style>
