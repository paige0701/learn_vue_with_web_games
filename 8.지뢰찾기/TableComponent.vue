<template>
    <table>
        <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
            <td v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
        </tr>
    </table>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        components: {
        },
        computed: {
            ...mapState(['tableData'])
        },
        props : {
            tableData: Array
        }
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