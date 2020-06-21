import Vue from 'vue';
import VueRouter from 'vue-router';
import numberBaseball from '../3. 숫자야구/numberBaseball';
import responseCheck from '../4. 반응속도체크/responseCheck';
import rockScissorsPaper from '../5.가위바위보/rockScissorsPaper';
import lottoGame from '../6.로또/lottoGame';

// mode: history =  http://localhost:8080/VueRouter.html#/number-baseball # 없어짐
// refresh 하면 페이지 안떻요1

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/number-baseball', component: numberBaseball},
        {path: '/responseCheck', component: responseCheck},
        {path: '/rockScissorsPaper', component: rockScissorsPaper},
        {path: '/lottoGame', component: lottoGame}
    ],
});