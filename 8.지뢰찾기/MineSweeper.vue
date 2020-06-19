<template>
    <div>
        <mine-form></mine-form>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
    </div>
</template>
<script>

    import store from './store';
    import TableComponent from './TableComponent';
    import MineForm from './MineForm';
    import { mapState } from 'vuex';
    export default {
        store,
        components: {
            TableComponent,
            MineForm,
        },
        computed: {
            ...mapState(['timer', 'result'])
        },
        methods: {

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