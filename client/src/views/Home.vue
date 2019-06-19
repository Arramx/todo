<template>
<div id="app">
    <Todos :todos="todos" @del-todo="delTodo" @check-todo="checkTodo" v-show="!error" />
    <AddTodo @add-todo="addTodo" v-show="!error" />
    <div v-if="error" class="err">{{ error }}. Try again later.</div>
</div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import APIConnect from '../APIConnect.js';

export default {
    name: 'Home',
    components: {
        Todos,
        AddTodo
    },

    data() {
        return {
            todos: [],
            error: ''
        }
    },
    methods: {
        async delTodo(id) {
            try {
                await APIConnect.deleteTodo(id);
                this.todos = this.todos.filter(a => a.id !== id);
            } catch (err) {
                this.error = err.message;
            }

        },
        async addTodo(todo) {
            try {
                await APIConnect.addTodo(todo);
                this.todos = await APIConnect.getTodos();
            } catch (err) {
                this.error = err.message;
            }
        },
        async checkTodo(todo) {
            try {
                const index = this.todos.indexOf(todo);
                await APIConnect.checkTodo(todo.id, Math.abs(this.todos[index].done - 1));
                this.todos[index].done = Math.abs(this.todos[index].done - 1);
            } catch (err) {
                this.error = err.message;
            }
        }
    },
    async created() {
        try {
            this.todos = await APIConnect.getTodos();
        } catch (err) {
            this.error = err.message;
        }
    }
}
</script>

<style lang="scss" scoped>
.err {
    padding-top: 15px;
    color: rgb(189, 8, 8);
}
</style>
