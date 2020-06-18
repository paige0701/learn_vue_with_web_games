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
                console.info(this.$root.$data)
                console.info(this.$parent.$data)
                this.$root.$data.turn = this.$root.$data.turn === 'O'? 'X' : 'O'
            }
        }
    }
</script>
<style>
</style>