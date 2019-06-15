<template>
<div class="todo-item" :class="{'is-done':todo.done}">
    <p>
        <input type="checkbox" @change="changeComplete"/>
        {{ todo.text }}
        <button class="del" @click="$emit('del-todo', todo.id)">X</button>
    </p>
</div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        changeComplete() {
            this.todo.done = !this.todo.done;
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-done {
    text-decoration: line-through;
}

.del {
    border-radius: 50%;
    border: none;
    background: rgb(240, 0, 0);
    color: white;
    cursor: pointer;
    padding: 5px 8px;
    float: right;
}
</style>
