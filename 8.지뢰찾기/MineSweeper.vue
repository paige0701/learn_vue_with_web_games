<template>
    <div>
        <mine-form></mine-form>
        <div>{{timer}}</div>
        <table-component></table-component>
        <div>{{result}}</div>
    </div>
</template>
<script>

    import store, {INCREMENT_TIMER} from './store';
    import TableComponent from './TableComponent';
    import MineForm from './MineForm';
    import { mapState } from 'vuex';

    let interval ;
    export default {
        store,
        components: {
            TableComponent,
            MineForm,
        },
        computed: {
            ...mapState(['timer', 'result', 'halted'])
        },
        methods: {

        },
        watch: {
            halted(value, oldValue) {
                if (value === false) {
                    interval = setInterval(() => {
                        this.$store.commit(INCREMENT_TIMER)
                    }, 1000) // javascript에서 타이머는 정확하지 않을 수 있다.
                } else {
                    clearInterval(interval)
                }
            }
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