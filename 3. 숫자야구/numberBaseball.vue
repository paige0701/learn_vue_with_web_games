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
    export default {
        data() {
            return {
                tries: [],
                value: '',
                result: ''
            }
        },
        methods: {
          onSubmitForm() {
              // prevent default 대신 위에 @submit.prevent로 대체 가능
              this.tries.push({try: this.value, result: '홈런'});
              this.value = '';
              this.$refs.answer.focus();
          }
        }
    }
</script>
<style></style>