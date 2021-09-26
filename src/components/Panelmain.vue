<template>
    <div class="main">
 <Dashboar />

    <!-- inputs -->
<!-- <div class="col-md-4 panel"> -->
        <!-- <h1>Panel de usuario</h1> -->
    <div class="container gestion">
      <h2>Ingrese informacion correpondiente</h2>
    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese placa</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese Nombre</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese puesto</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

  <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">Seleccione tipo de vehiculo</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Motocicleta</option>
    <option value="2">Carro</option>
    <option value="3">Camionetas</option>
    <option value="3">Camion</option>
    <option value="3">Vans</option>
  </select>
  </div>
  <button type="button" class="btn btn-success">Ingresar</button>
</div> 
</div>

</template>
<script>
import Dashboar from './Dashboar.vue'

export default {
//   name: 'App',
  components: {
      Dashboar 
  }
}
</script>

    <style>
.main{
    height: 600px;
    margin: 0%;
    padding: 0%;
    display: flex;
}
h2{
       text-align: center;
}
.gestion{
  margin-top: 150px;
}
.container{
    /* top: 300px; */
}
.panel{
    /* margin: 150px; */
    display: flex;
    justify-items: center;
    justify-content: center;
}


</style>