<template>

    <div>
        <div>{{turnMessage}}</div>
        <table-component></table-component>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>

</template>
<script>
    import { mapState, mapGetters } from 'vuex';
    import store from './store'; // store를 최 상단 컴포넌트와 연결해야한다.
    import TableComponent from './TableComponent';
    export default {
        store, // 스토어를 이 컴포넌트와 연결해야한다..
        components : {
            TableComponent
        },
        computed: {

            // 매번 store에 있는 모든 변수를 가지고 오는게 어려울 수 있으니
            // mapState를 사용하면 된다
            ...mapState(['winner', 'turn']),
            ...mapGetters(['turnMessage'])

            /*
            ...mapState({
                winner: state => state.winner,
                winner(state) {
                    return state.winner + this.data   // 여기서는 this. 사용 가능!
                },
                turnState: 'turn' // turnState로 이름 바꿀 수 있음
            })
            */


            // winner() {
            //     return this.$store.state.winner
            // },
            // turn() {
            //     return this.$store.state.turn
            // }
        }
    }
</script>
<style></style>