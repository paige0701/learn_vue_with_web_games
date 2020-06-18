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
        }, mounted() {
        }, beforeDestroy() {
        }
    }
</script>
<style></style>