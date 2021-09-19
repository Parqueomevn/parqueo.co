<template>
    <div>
        <div v-for="user in users" v-bind:key="user.login.uuid">
            <h2>{{user.name.first}}</h2>
        </div>
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
