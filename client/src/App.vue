<template>
<div id="app">
    <Header />
    <router-view />
</div>
</template>

<script>
import Header from './components/Header';

export default {
    name: 'app',
    components: {
        Header
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
