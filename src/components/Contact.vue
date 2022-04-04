<template>
  <div class="contact">
    <h1>{{title}}</h1>
    <form>
  <fieldset>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com">
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="name" class="form-label mt-4">Full Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>

    <div class="form-group">
      <label for="exampleTextarea" class="form-label mt-4">Message</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
  
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      title: 'Contact Us!!!'
    }
    
  },
}
</script>

<style scoped>
.contact{
    background-color: aqua;
    margin: -80px 0px 0px 0px;
}
h1 {
  text-align: center;
  margin:  5% 0% 0% 0%;
}

fieldset {
  margin:  5% 0% 0% 27%;
  width: 50%;
  background-color: aliceblue;
  
}
label{
  font-family: 'Courier New', Courier, monospace;
  float:left;
  text-align: left;
}

button{
width: 30%;
margin:  3% 0% 0% 30%;
}
</style>