<template>
    <div class="row" >
        <!-- <div class="col-3">  -->
        <div class="col-3" v-for="user in users" v-bind:key="user.login.uuid">
            <div class="card-img-top" :src="user.picture.large">

            <a :href="'/user/'+user.login.uuid"> <img :src="user.picture.medium" alt=""> </a>
            <p>{{user.name.first}}</p>
            <p>{{user.location.city}}</p>
            <!-- <h2></h2> -->
            </div>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
export default{
    props:{
        users:{
            type: Array,
            default: () => []
        }
    }
}
// export default{
//     props:{
//         users:{
//             type: Array,
//             default: () => []
//         }
//     }
// }
</script>
