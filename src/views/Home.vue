<template>
  <div>
    <users v-bind:users="users"></users>
  </div>
</template>
<script>
import api from '@/api';
import Users from '@/components/Users.vue';

export default{
  components: { 
      Users 
      },
    data(){
        return{
            users: []
        }
    },
    created(){
        api.getUsersPromise().then(data => this.users = console.log(data));
        api.getUsersPromise().then(data => this.users = data);
    }
}
</script>
