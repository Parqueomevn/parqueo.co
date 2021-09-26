<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 350px; height:100%">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Panel</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a :href="'/home'" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Home
        </a>
      </li>
      <li>
        <a :href="'/Panelparking'" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Panel de parqueaderos
        </a>
      </li>
      <li>
        <a :href="'/Tickets'" class="nav-link text-white">
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
        <img src="https://randomuser.me/api/portraits/thumb/women/10.jpg" alt="" width="32" height="32" class="rounded-circle me-2">
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
</template>