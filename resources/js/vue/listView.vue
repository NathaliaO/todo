<template>
    <div class="container">
        <h3>List To Do</h3>
            <ul class="tasks">
                <li v-if="loading">
                    Carregando ...
                </li>
                <li v-else
                    v-for="todo in items"
                    :key="todo.id"
                    :class="{ completed: todo.completed }"
                    class="task"
                    @click="toggleTodo(todo)"
                >
                    {{ todo.name }}
                    <span class="delete" @click="deleteTodo(todo.id)">ⓧ</span>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    props: ['items'],
    data() {
        return {
            loading: false
        }
    },
    methods: {
        toggleTodo(todo) {
            this.loading = true;
            todo.completed = !todo.completed
            axios.put(`api/tasks/${todo.id}`, {
                item: todo
            }).then(response => {
                if (response.status == 201) {
                    this.item.name == "";
                    this.$emit('reload');
                }
            }).catch (error => {
                console.log(error);
            })
            this.loading = false;
        },
        deleteTodo(id) {
            this.loading = true;
            axios.delete(`api/tasks/${id}`).then(response => {
                if (response.status == 201) {
                    this.item.name == "";
                    this.$emit('reload');
                }
            }).catch (error => {
                console.log(error);
            })
            this.loading = false;
        }
    }
}
</script>

<style>
.tasks {
  padding: 0;
  list-style-type: none;
}

.task {
  padding: 10px;
  margin-bottom: 0.5rem;
  border: 0.5px solid #999;
  border-radius: 5px;
  color: #34495e;
  font-weight: bold;
}

.task:before {
  content: "\2002";
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #41b883;
}

.completed:before {
  content: "\2714";
}

.delete {
  display: block;
  float: right;
  color: #d22;
  width: 1.25rem;
  height: 1.25rem;
  text-align: center;
}
</style>