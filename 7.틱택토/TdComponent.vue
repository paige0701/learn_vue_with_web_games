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

                // 이미 누가 눌렀다면
                if(this.cellData) return;

                const rootData = this.$root.$data;
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
                let win = false;
                if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn) {
                    win = true;
                }
                if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
                    win = true;
                }
                if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
                    win = true;
                }
                if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
                    win = true;
                }

                if (win) {
                    rootData.winner = rootData.turn;
                    rootData.turn = 'O';
                    rootData.tableData = [['','',''], ['','',''], ['','','']]
                } else {
                    let all = true;
                    rootData.tableData.forEach((row) => {
                        row.forEach((cell) => {
                            if (!cell) {
                                all = false
                            }
                        })
                    });

                    if (all) { // 무승부
                        rootData.winner = '';
                        rootData.turn = 'O';
                        rootData.tableData = [['','',''], ['','',''], ['','','']]
                    } else {
                        rootData.turn = rootData.turn === 'O' ? 'X' : 'O';  // 게임이 아직 안끝난 경우
                        if (rootData.winner) {
                            rootData.winner = ''
                        }
                    }
                }

            }
        }
    }
</script>
<style>
</style>