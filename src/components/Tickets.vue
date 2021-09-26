<template>
    <div class="main">
    <Dashboar />
<!-- <div class="col"> -->
    <div class="container">
        <h1>Gestion tickets</h1>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Buscar Placa </span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
<label class="btn btn-primary" for="btn-check-2">Buscar</label>
        <div class="item-resul">

                <h4>Ticket</h4>
                <!-- <p> -->
            <div class="container ticket" v-bind:key="user.login.uuid">
            <!-- <div class="card-img-top" :src="user.picture.large"> -->

            <!-- <a :href="'/user/'+user.login.uuid"> 
            <img :src="user.picture.medium" alt=""> </a> -->
            <p>nombre y apellido :{{user.name.first}} {{user.name.last}}</p>
            <p>Ciudad: {{user.location.city}}</p>
            <p>email: {{user.email}}</p>
            <p>username: {{user.login.username}}</p>
            <b-button class="btn-danger" variant="danger">Finalizar Ticket</b-button>
            </div>

            
            </div>
        </div>
        </div>
</template>
<script>
import api from '@/api';
import Dashboar from './Dashboar.vue'
// import Users from '@/components/Users.vue';
export default {
//   name: 'App',
  data(){
      return{
        user: {},//mostrar una informacin de ese objeto de dato
        loaded: false
      }
  },
  components: {
      Dashboar
  },
    created(){
        // api.getUsersPromise().then(data => this.users = console.log(data));
        // api.getUsersPromise().then(data => this.users = data);
        // (async()=>{this.users = await api.getUserAsync()})();
        this.getUser(this.$route.query.id);//devuelve el usuario desde el id por medi de la url
    },
    methods:{
            getUser(id){
           (async ()=>{
               this.user = await api.getUserData(id);
            //    this.loaded = true;
               console.log(this.user);
           })();
       }
    }

}
</script>

<style scoped>
.container{
    height: 600px;
}
.ticket{

    /* width: 100%; */
}
.item-resul{
    margin-top: 25px;
    text-align: center;

    /* display: flex; */
    width: 100%;
    height: 300px;
    border: medium double #369; 
}
 label{
      /* text-align: center; */
 }
p{   
    width: 100%;
    text-align: center;
}
.btn-danger {
    width: 100px;
    height: 60px;
}
</style>