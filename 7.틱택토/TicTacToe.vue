<template>
    <!--
    <table-component v-bind:table-data=""></table-component>
    v-bind 생략 가능 ! 자식 컴포넌트로 props 전달
    -->
    <div>
        <table-component :table-data="tableData"></table-component>
        <div>{{turn}}님의 턴입니다.</div>
    </div>

</template>
<script>
    import TableComponent from './TableComponent'
    export default {
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
                turn: 'O'
            }
        },
        computed: {
        }, methods: {
            // vue 에서 배열 값을 index로 바꾸면 반영이 안된다. 객채도 안됨 (index 로 !)
            // 꼭 Vue.set(this.tableData[1], 0, 'X') 로 한다.
            // or this.$set(this.tableData[1], 0, 'X')
        }, mounted() {
        }, beforeDestroy() {
        }
    }
</script>
<style></style>