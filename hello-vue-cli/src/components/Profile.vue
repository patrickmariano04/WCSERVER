<template>
  
  <div id="prof">
  
    <form> <br/>
    <h1>{{msg1}} </h1>
    <p>Patrick Januel Mariano</p>

    <h2>{{crs}}</h2>
    <p>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</p>

    <h2>{{crs1}}</h2>
    <p>WEB DEVELOPMENT</p>

    <h2>{{msg2}}</h2>
    <p>To work in a company that offers stability, </p>
    <p>to acquire further knowledge and skill in my chosen</p>
    <p>profession and make a rapid career progress.</p>

    <h2>{{msg3}}</h2>
    <p>January 04, 2001</p>

    <h2>{{msg4}}</h2>
    <p>21 years old</p>

    <h2>{{msg5}}</h2>
    <p>Male</p>
    
   
 </form> <br/>
  
  </div>

</template>

<script>


export default {
  name: 'prof',

  data () {
    return {
      msg1:'PERSONAL INFORMATION',
      msg2:'OBJECTIVE',
      msg3:'DATE OF BIRTH',
      msg4:'Age',
      msg5:'Gender',
      crs:'Course',
      crs1:'Specialization',
    
      
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Courier New', Courier, monospace;
  float: left;
  margin-left: 25%;
  margin-top: 2%;
  color: #2c3e50;
  
  

}

form{
  background-color: lightpink;
  width: 50em;
  height: 50em;
  margin-bottom: -20%;
}

h1{
  font-size: 1em;
  margin-left: 10%;
  margin-top: 5%;
  border: #42b983;
  border-color: palevioletred;
}
h2{
  font-size: 1em;
  margin-top: 3%;
  margin-left: 10%;
}

p{
  margin-top: 2.7%;
  font-size: .9em;
  margin-left: 11%;
}
.one{
  margin-top: -10%;
  margin-left: 20%;
}


</style>
