<template>
<div>
    <main class="login-1">
        <div class="center">
        <h1>Sistema de control de parqueadero</h1>
        <p>Logeate para ingresar al panel de asignacion</p>
        <router-link to="/Panelmain" type="button" class="btn btn-success" href="">Ingresar</router-link>
        </div>
        </main>
    </div>
    <!-- <div class="row login-2">
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div> -->
</template>

<style scoped>
.login-1{
  color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 150px; */
    height: 550px;
    background: url('../assets/Banner2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;

}
.center{
    text-align: center;
}
</style>