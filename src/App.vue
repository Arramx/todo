<template>
<div id="app">
    <Header />
    <Todos :todos="todos"/>

</div>
</template>

<script>
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import uuid from 'uuid';

export default {
    name: 'app',
    components: {
        Header,
        Todos
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
    }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
    margin: 0;
    width: 100vw;
    height: 100vh;
}

:root {
    line-height: 0;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}

</style>