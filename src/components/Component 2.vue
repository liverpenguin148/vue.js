  // Component template should contain exactly one root element → templateはひとつのroot elementでなければならない
  // 基本的には divタグで囲えばOK

<template>
  <div class="component">
    <h1>コンポーネント</h1>
    <paragraph></paragraph>
    <h1>Props</h1>
    <!-- プロパティ:message を指定 -->
    <props message="hello"></props>
    <props message="world"></props>
    <slot>hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge</slot>
  </div>
</template>

<script>
// Vueのインポート
import Vue from 'vue'

// component: paragraph
Vue.component('paragraph', {
  // templateを記載
  template: '<div><p><button @click="count"> {{counter}} </button></p><p><button @click="count"> {{counter}} </button></p></div>',

  // データの定義
  data: function () {
    return {
      counter: 0
    }
  },

  // メソッドの定義
  methods: {
    count: function () {
      this.counter++
    }
  }
})

// プロパティの指定
Vue.component('props', {
  // プロパティの指定
  props: ['message'],

  // テンプレートの指定
  template: '<p> {{message}} </p>'
})

// slot → 長い文章を入れたいとき
Vue.component('slot', {
  template: '<p><slot></slot></p>'
})

export default {

}
</script>

<style scoped>
</style>
