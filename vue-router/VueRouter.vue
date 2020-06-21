<template>
    <div>
        <div>
            <router-link to="/game">게임 매쳐</router-link>
            <router-link to="/game/responseCheck?data=1&hello=ok">쿼리스트링</router-link>
            <router-link to="/game/responseCheck">반응체크</router-link>
            <router-link to="/game/rockScissorsPaper">가위바위보</router-link>
            <router-link to="/game/lottoGame">로또게임</router-link>
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