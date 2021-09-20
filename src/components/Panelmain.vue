<template>
    <div class="main">
<!-- <div class="main"> -->
    <!-- division -->
    <!-- <div class="col-md-4"> -->
    <!-- mini dashboar -->
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 350px; height:100%">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Panel</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Home
        </a>
      </li>
      <!-- <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Gestion de ingreso de vehiculos
        </a>
      </li> -->
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Panel de parqueaderos
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Tickets generados
        </a>
      </li>
      <li>
        <!-- <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Customers
        </a> -->
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>Admin</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  <!-- </div> -->
    <!-- fin de dashboar -->
    </div>
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

<!-- <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select> -->
</div>
<!-- </div> -->
<!-- </div> -->
    <!-- </div> -->
    
</template>
<script>
// (function () {
//   'use strict'
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   tooltipTriggerList.forEach(function (tooltipTriggerEl) {
//     new bootstrap.Tooltip(tooltipTriggerEl)
//   })
// })()

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