<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value">
            <button type="submit">입략</button>
        </form>
        <div>시도: {{tries.length}}</div>
        <ul>
            <li v-for="t in tries">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>

    </div>
</template>
<script>

    const getNumbers = () => {
      const candidates = [1,2,3,4,5,6,7,8,9];
      const array = [];
      for (let i = 0; i < 4; i++) {
          const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
          array.push(chosen);
      }
      return array
    };


    export default {
        data() {
            return {
                answer: getNumbers(),
                tries: [],
                value: '',
                result: ''
            }
        },
        methods: {
          onSubmitForm() {
              // prevent default 대신 위에 @submit.prevent로 대체 가능

              if (this.value === this.answer.join('')) {
                  this.tries.push({try: this.value, result: '홈런'});
                  this.result = 'Homerun';

                  alert('게임을 다시 실행합니다.');
                  this.value = '';
                  this.$refs.answer.focus();
                  this.tries = [];
                  this.answer = getNumbers();

              } else {

                  if (this.tries.length >= 9) { // 10번째 시도
                      this.result = `10번 넘게 틀려서 실패 ! 답은 ${this.answer.join(',')}입니다.`
                      alert('게임을 다시 실행합니다.');
                      this.value = '';
                      this.$refs.answer.focus();
                      this.tries = [];
                      this.answer = getNumbers();

                  } else {
                      let strike = 0;
                      let ball = 0;
                      const answerArray = this.value.split('').map(v => parseInt(v));
                      for (let i = 0; i < 4; i++) {
                          if (answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
                              strike++;
                          } else if(this.answer.includes(answerArray[i])) { // 숫자만 정답
                              ball ++
                          }
                      }
                      this.tries.push({
                          try: this.value,
                          result: `${strike} 스트라이크, ${ball} 볼입니다`
                      });
                      this.value = '';
                      this.$refs.answer.focus();
                  }

              }
          }
        }
    }
</script>
<style></style>