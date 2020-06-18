<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    export default {
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        methods: {
            onClickTd() {
                this.$set(this.$root.$data.tableData[this.rowIndex], this.cellIndex, this.$root.$data.turn);
                this.$root.$data.turn = this.$root.$data.turn === 'O'? 'X' : 'O'
            }
        }
    }
</script>
<style>
</style>