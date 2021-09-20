<template>
    <div>
        <div class="container">
            <h1>Gestion Tickets</h1>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Buscar tickets</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Buscar Placa </span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<label class="btn btn-primary" for="btn-check-2">Buscar</label>
        <div class="item-resul">
            <!-- <p></p> -->
        </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    height: 600px;
}
.item-resul{
    margin-top: 50px;
    display: flex;
    width: 100%;
    height: 300px;
    border: medium double #369; 
}
 label{
      text-align: center;
 }
</style>