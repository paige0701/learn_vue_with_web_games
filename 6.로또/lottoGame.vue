<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" v-bind:number="ball" :key="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" v-bind:number="bonus"></lotto-ball>
        <button v-if="redo" @click="onClickRedo">한번 더!</button>
    </div>
</template>
<script>
    import lottoBall from './lottoBall';

    function getWinNumbers() {
        const candidate = Array(45).fill().map((v, i) => i+1);
        const shuffle = [];
        while (candidate.length > 0) {
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
        }
        const bonusNumber =shuffle[shuffle.length-1]
        const winNumbers = shuffle.slice(0,6 ).sort((p, c) => p-c);
        return [...winNumbers, bonusNumber]
    }
    const timeouts = [];
    export default {
        components: {
            'lotto-ball': lottoBall
        },
        data() {
            return {
                winNumbers : getWinNumbers(),
                redo: false,
                bonus: null,
                winBalls: []
            }
        },
        computed: {
        },
        methods: {
            onClickRedo() {
                this.redo = false;
                this.winNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.showBalls();
            },
            showBalls() {
                for (let i = 0; i < this.winNumbers.length-1; i++){
                    timeouts[i] = setTimeout(() => {
                        this.winBalls.push(this.winNumbers[i])
                    }, (i+1) * 1000)
                }
                timeouts[6] = setTimeout(() =>{
                    this.bonus = this.winNumbers[6];
                    this.redo = true;
                }, 7000)
            }
        },
        created() {
            console.info('created');
        },
        mounted() {
            this.showBalls()
        },
        updated() {
            console.log('updated')
        },
        beforeDestroy() {
            timeouts.forEach((t)=> {
                clearInterval(t)
            })
        },
        destroyed() {
            console.log('destroyed')
        }
    }
</script>
<style>
</style>