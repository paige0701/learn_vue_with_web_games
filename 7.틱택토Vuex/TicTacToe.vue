<template>

    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component></table-component>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>

</template>
<script>
    import store from './store'; // store를 최 상단 컴포넌트와 연결해야한다.
    import TableComponent from './TableComponent';
    export default {
        store, // 스토어를 이 컴포넌트와 연결해야한다..
        components : {
            TableComponent
        },
        data() {
            return {
                tableData : [
                    ['', '', ''],
                    ['', '', ''],
                    ['', '', '']
                ],
                turn: 'O',
                winner: ''
            }
        },
        computed: {
        }, methods: {
        }
    }
</script>
<style></style>