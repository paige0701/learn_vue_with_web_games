<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    import EventBus from './EventBus';
    export default {
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        methods: {
            onClickTd() {
                // 이미 누가 눌렀다면
                if(this.cellData) return;
                EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
            }
        }
    }
</script>
<style>
</style>