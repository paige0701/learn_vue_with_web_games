<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
        <template v-show="result.length">
            <!--v show 는 테그가 있음. v-if는 tag자체가 존재 하지 않음-->
            <div>평균 시간 : {{average}}ms</div>
            <button @click="onReset">reset</button>
        </template>
    </div>
</template>
<script>
    let startTime = 0;
    let endTime = 0;
    let timeout = null;

    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '클릭해서 시작하세요'
            }
        },
        computed: {
          average() { //캐싱이 된다.message만 바꿨는데 리설트 부분이 계속 계산한다 if computed를 쓰지 않는 경
              return this.result.reduce((a,b) => a+b, 0)/this.result.length || 0;
          }
        },
        methods: {
            onReset() {
                this.result = [];
            },
            onClickScreen(){
                if (this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요.';
                    timeout = setTimeout( () => {
                        this.state = 'now';
                        this.message = '지금 클릭!';
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000) // 2~3초
                } else if (this.state === 'ready') {
                    clearTimeout(timeout)
                    this.state = 'waiting';
                    this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요'
                } else if (this.state === 'now') {
                    endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요';
                    this.result.push(endTime-startTime)
                }
            }
        }
    }
</script>
<!--이 컴포넌트 안에서만 유효한 css scoped사용-->
<style scoped>
    #screen {
        width: 300px;
        height: 300px;
        text-align: center;
        user-select: none;
    }

    #screen.waiting {
        background-color: aqua;
    }

    #screen.ready {
        background-color: red;
        color: white;
    }

    #screen.now {
        background-color: greenyellow;
    }
</style>