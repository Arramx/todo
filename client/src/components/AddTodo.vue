<template>
<form @submit.prevent="addTodo">
    <input type="text" placeholder="Add todo.." class="add-todo" v-model="newTodo"/>
    <input class="button" value="Add" type="submit"/>
</form>
</template>

<script>
import uuid from 'uuid';
export default {
    name: 'AddTodo',
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            const todo = {
                id: uuid.v4(),
                text: this.newTodo,
                done: false
            }

            this.newTodo = '';

            this.$emit('add-todo', todo);
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    display: flex;
}

.add-todo {
    padding: 10px;
    flex: 10;
    border: none;
    border-bottom: rgba(40, 40, 40, .2) solid 1px;
    transition: 2s border-bottom;

    &:focus {
        border-bottom: #000 solid 1px;
    }
}

@media(max-width: 320) {
    .add-todo {
        font-size: 10px;
    }
}

.button {
    flex: 2;
    color: white;
    background: #444;
    border: none;
    text-align: center;
}
</style>
