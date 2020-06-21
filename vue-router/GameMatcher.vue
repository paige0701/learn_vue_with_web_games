<template>
    <div v-if="currentGame === 'number-baseball'">
        <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'responseCheck'">
        <response-check></response-check>
    </div>
    <div v-else-if="currentGame === 'lottoGame'">
        <lotto-game></lotto-game>
    </div>
    <div v-else-if="currentGame === 'rockScissorsPaper'">
        <rock-scissors-paper></rock-scissors-paper>
    </div>
</template>
<script>
    import numberBaseball from '../3. 숫자야구/numberBaseball';
    import responseCheck from '../4. 반응속도체크/responseCheck';
    import rockScissorsPaper from '../5.가위바위보/rockScissorsPaper';
    import lottoGame from '../6.로또/lottoGame';

    export default {
        components: {
            numberBaseball,
            responseCheck,
            rockScissorsPaper,
            lottoGame
        },
        mounted() {
            console.log(this.$router)
            console.log(this.$route);
        },
        computed: {
            currentGame() {
                return this.$route.params.name;
            }
        }
    }
</script>