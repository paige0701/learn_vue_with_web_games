<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData"
                      :row-data="rowData"
                      :row-index="index">
        </tr-component>
    </table>
</template>
<script>
    import TrComponents from './TrComponent'
    export default {
        components: {
            TrComponents
        },
        props : {
            tableData: Array
        }
    }
</script>