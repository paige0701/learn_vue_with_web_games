<template>
    <div>
        <div>
            <router-link to="/number-baseball">숫자야구</router-link>
            <router-link to="/responseCheck">반응체크</router-link>
            <router-link to="/rockScissorsPaper">가위바위보</router-link>
            <router-link to="/lottoGame">로또게임</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

    import router from './routes';

    export default {
        router
    }
</script>
<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
    }
</style>