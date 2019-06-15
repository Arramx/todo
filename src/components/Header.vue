<template>
<div class="header">
    <h1>TodoList</h1>
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
}

.header {
    text-align: center;
    background: #222;
    height: 90px;
    @include center;

    h1 {
        color: #fff;
        font-size: 40px;
    }
}
</style>