<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>
<script>
    import {CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from "./store";

    export default {
        props: {
            cellData: String,
            cellIndex: Number,
            rowIndex: Number
        },
        computed : { //vuex state는 computed 를 통해 가지고 온다.
            cellData() {
                return this.$store.state.tableData[this.rowIndex][this.cellIndex];
            },
            tableData() {
                return this.$store.state.tableData;
            },
            turn() {
                return this.$store.state.turn;
            }
        },
        methods: {
            onClickTd() {
                // 이미 누가 눌렀다면
                if(this.cellData) return;

                // store 에서 mutation 이름 CLICK_CELL이 실행 된다.
                this.$store.commit(CLICK_CELL, {row: this.rowIndex, cell: this.cellIndex});

                this.$set(this.tableData[this.rowIndex], this.cellIndex, this.turn);
                let win = false;
                if (this.tableData[this.rowIndex][0] === this.turn && this.tableData[this.rowIndex][1] === this.turn && this.tableData[this.rowIndex][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][this.cellIndex] === this.turn && this.tableData[1][this.cellIndex] === this.turn && this.tableData[2][this.cellIndex] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                    win = true;
                }
                if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                    win = true;
                }

                if (win) {
                    this.$store.commit(SET_WINNER, this.turn);
                    this.$store.commit(RESET_GAME);
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
                        this.$store.commit(NO_WINNER);
                        this.$store.commit(RESET_GAME);
                    } else {
                        this.$store.commit(CHANGE_TURN);
                    }
                }

            }
        }
    }
</script>
<style>
</style>