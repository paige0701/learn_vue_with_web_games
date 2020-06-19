import Vuex from 'vuex';
import Vue from 'vue';

// store 와 Vue 와 연결해야한다.
Vue.use(Vuex);

// export const 와 exort default 차이점 알아보기
export const SET_WINNER = 'SET_WINNER';  // import {SET_WINNER} from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({  // import store from ./store;
    state: { //vue의 data와 비슷
        tableData : [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        turn: 'O',
        winner: ''
    },
    getters: { // 뷰의 computed와 비슷
        turnMessage(state) {
            return state.turn + ' 님이 승리하셨습니다.'
        }

    },
    mutations: { // state를 수정할 때 사용합. 동시적으로

        //object dynamic 속성
        [SET_WINNER](state, winner) { //대문자로
            state.winner = winner
        },
        [CLICK_CELL](state, {row, cell}) {
            // state.tableData[row][cell] = state.turn;
            Vue.set(state.tableData[row],cell, state.turn)
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O'? 'X' : 'O'
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ]
        },
        [NO_WINNER](state) {
            state.winner = '';
        }

    },
    actions: { // 비동기를 사용할 때 또는 여러 뮤테이션을 연달이 실행할 때

    }
});
