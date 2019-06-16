<template>
<div class="header">
    <h1>TodoList</h1>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</div>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.header {
    text-align: center;
    color: white;
    background: #222;
    height: 100px;
    @include center;

    h1 {
        font-size: 40px;
        padding-bottom: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        padding: 5px;
    }

}
</style>
