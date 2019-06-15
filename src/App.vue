<template>
<div id="app">
    <Header />
    <Todos :todos="todos" @del-todo="delTodo" />
    <AddTodo @add-todo="addTodo"/>
</div>
</template>

<script>
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

export default {
    name: 'app',
    components: {
        Header,
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    line-height: 0;
}

* {
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}
</style>
