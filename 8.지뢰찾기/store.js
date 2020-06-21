import Vuex from 'vuex';
import Vue from 'vue';

// store 와 Vue 와 연결해야한다.
Vue.use(Vuex);

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0 // 0 이상이면 다 opened
};
const plantMine = (row, cell, mine) => {
    const candidate = Array(row*cell).fill().map((arr, i) => {
        return i
    });
    const shuffle =[];

    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }

    const data = [];
    for (let i =0 ; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0 ; j < cell; j++) {
            rowData.push(CODE.NORMAL)
        }
    }

    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k]/cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }

    return data

};
export default new Vuex.Store({  // import store from ./store;
    state: {
        tableData : [],
        data: {
            row: 0,
            cell: 0,
            mine: 0
        },
        timer: 0,
        halted: true, //중단 됨
        result: ''
    },
    getters: {
    },
    mutations: {
        [START_GAME](state, {row, cell, mine}) {
            state.data = {
                row,
                cell,
                mine
            };
            state.tableData = plantMine(row, cell, mine);
            state.timer = 0;
            state.halted = false;

        },
        [CLICK_MINE](state, {row, cell}) {
            state.halted = true; // 지뢰 밟았으니 게임 스탑
            Vue.set(state.tableData[row], cell, CODE.CLICKED_MINE)
        },
        [OPEN_CELL](state, {row, cell}) {

            const checked = [];
            function getAroundMineNumber(row, cell) {

                const checkIfRowCellIsUndefined = row < 0 || row >= state.tableData.length || cell < 0 || cell >= state.tableData[0].length;

                if (checkIfRowCellIsUndefined) return;

                if ([CODE.OPENED, CODE.FLAG_MINE, CODE.FLAG, CODE.QUESTION_MINE, CODE.QUESTION].includes(state.tableData[row][cell])) {
                    return;
                }

                if (checked.includes(row+'/'+cell)) {
                    return;
                } else {
                    checked.push(row+'/'+cell)
                }

                // 칸을 클릭했을 떄 주변 주변 지뢰 번호 출력하기
                let around = [];

                if (state.tableData[row-1]) {
                    around = around.concat([
                        state.tableData[row-1][cell-1], state.tableData[row-1][cell], state.tableData[row-1][cell+1]
                    ]);
                }
                around = around.concat([
                    state.tableData[row][cell-1], state.tableData[row][cell+1]
                ]);

                if (state.tableData[row+1]) {
                    around = around.concat([
                        state.tableData[row+1][cell-1], state.tableData[row+1][cell], state.tableData[row+1][cell+1]
                    ]);
                }

                const counted = around.filter((v) => {
                    return [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
                });

                if (counted.length === 0 && row > -1) { //주변칸 열어보기
                    let near = [];
                    if (row-1 > -1) {
                        near.push([row-1, cell-1]);
                        near.push([row-1, cell]);
                        near.push([row-1, cell+1]);
                    }

                    near.push([row, cell-1]);
                    near.push([row, cell+1]);

                    if (row + 1 < state.tableData.length) {
                        near.push([row+1, cell-1]);
                        near.push([row+1, cell]);
                        near.push([row+1, cell+1]);
                    }

                    near.forEach((n) => {
                        if (state.tableData[n[0]][n[1]] !== CODE.OPENED) {
                            getAroundMineNumber(n[0], n[1])
                        }
                    })
                }
                Vue.set(state.tableData[row], cell, counted.length)
            }
            getAroundMineNumber(row, cell);
            // state.tableData[row][cell] = code.OPEN // 이렇게 하지마 !!
            Vue.set(state.tableData[row], cell, getAroundMineNumber(row, cell))
        },
        [FLAG_CELL](state, {row, cell}) {
            if( state.tableData[row][cell] === CODE.MINE) {
                Vue.set(state.tableData[row], cell, CODE.FLAG_MINE)
            } else {
                Vue.set(state.tableData[row], cell, CODE.QUESTION)
            }
        },
        [QUESTION_CELL](state, {row, cell}) {
            if( state.tableData[row][cell] === CODE.FLAG_MINE) {
                Vue.set(state.tableData[row], cell, CODE.QUESTION_MINE)
            } else {
                Vue.set(state.tableData[row], cell, CODE.QUESTION)
            }

        },
        [NORMALIZE_CELL](state, {row, cell}) {
            if( state.tableData[row][cell] === CODE.QUESTION_MINE) {
                Vue.set(state.tableData[row], cell, CODE.MINE)
            } else {
                Vue.set(state.tableData[row], cell, CODE.NORMAL)
            }

        },
        [INCREMENT_TIMER](state) {
            state.timer += 1;
        },


    },
    actions: {

    }
});
