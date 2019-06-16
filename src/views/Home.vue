<template>
<div id="app">
    <Todos :todos="todos" @del-todo="delTodo" />
    <AddTodo @add-todo="addTodo" />
</div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import uuid from 'uuid';

export default {
    name: 'Home',
    components: {
        Todos,
        AddTodo
    },

    data() {
        return {
            todos: [{
                    text: 'One',
                    id: uuid.v4(),
                    done: false
                },
                {
                    text: 'Two',
                    id: uuid.v4(),
                    done: false
                },
                {
                    text: 'Three',
                    id: uuid.v4(),
                    done: false
                }
            ]
        }
    },
    methods: {
        delTodo(id) {
            this.todos = this.todos.filter(a => a.id !== id);
        },
        addTodo(todo) {
            this.todos.push(todo);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
