<template>
    <!--
    <table-component v-bind:table-data=""></table-component>
    v-bind 생략 가능 ! 자식 컴포넌트로 props 전달
    -->
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>

</template>
<script>
    import EventBus from './EventBus';
    import TableComponent from './TableComponent';
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
                turn: 'O',
                winner: null
            }
        },
        computed: {
        }, methods: {
            // vue 에서 배열 값을 index로 바꾸면 반영이 안된다. 객채도 안됨 (index 로 !)
            // 꼭 Vue.set(this.tableData[1], 0, 'X') 로 한다.
            // or this.$set(this.tableData[1], 0, 'X')
            onClickTd(rowIndex, cellIndex) {
                this.$set(this.tableData[rowIndex], cellIndex, this.turn);
                let win = false;
                if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                    win = true;
                }

                if (win) {
                    this.winner = this.turn;
                    this.turn = 'O';
                    this.tableData = [['','',''], ['','',''], ['','','']]
                } else {
                    let all = true;
                    this.tableData.forEach((row) => {
                        row.forEach((cell) => {
                            if (!cell) {
                                all = false
                            }
                        })
                    });

                    if (all) { // 무승부
                        this.winner = '';
                        this.turn = 'O';
                        this.tableData = [['','',''], ['','',''], ['','','']]
                    } else {
                        this.turn = this.turn === 'O' ? 'X' : 'O';  // 게임이 아직 안끝난 경우
                        if (this.winner) {
                            this.winner = ''
                        }
                    }
                }
            }
        }, created() {

            // 이벤트를 중앙에서 통제하는 시스템 이벤트버스!
            EventBus.$on('clickTd', this.onClickTd);
        }
    }
</script>
<style></style>