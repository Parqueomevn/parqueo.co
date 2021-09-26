<template>
<div class="container">
    <div class="row">
    <b-table striped hover :items="users" :fields="fields" ></b-table>
    </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
        fields: ['email', {key: 'gender', sortable:true}, 'name'],
        }
    },
    props: {
        users:{
            type: Array,
            default:() => []
        }
    }
}
</script>