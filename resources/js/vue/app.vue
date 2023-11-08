<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <h3>TO DO LIST</h3>
            <a class="navbar-brand text-end" href="/login">Login</a>
        </div>
    </nav>
    <div class="todoListContainer">
        <div class="heading">
            <h1 id="title">To Do List</h1>
            <add-item-form/>
        </div>
        <list-view
        :items="items"
        :reload="getList()"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm.vue";
import listView from "./listView.vue";
export default {
    components: {
     addItemForm,
     listView
    },
    data: function () {
        return {
            items:[],
        }
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            axios.get('api/tasks')
            .then(response => {
                this.items = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    create() {
        this.getList();
    }
}
</script>


<style scoped>
 .todoListContainer {
    width: 350px;
    margin:auto;
}

/* .heading {
    background: white;
    padding: 10px;
} */

#title {
    text-align: center;
}  

</style>
