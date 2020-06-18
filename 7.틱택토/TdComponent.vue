<template>
    <td>{{cellData}}</td>
</template>
<script>
    export default {
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        }
    }
</script>