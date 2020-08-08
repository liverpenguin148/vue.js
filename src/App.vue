// アプリケーションのルートコンポーネント
<template>
  <div id="app">
    <!-- ルートとマッチしたコンポーネントが描画される -->
    <router-link to="/">Home</router-link>
    <router-link to="/test">Test</router-link>
    <router-link to="/janken">じゃんけん</router-link>
    <router-link to="/component">コンポーネント</router-link>
    <!-- 動的に表示する -->
    <router-link to="/user/1">ユーザー１</router-link>
    <!-- name: URLのパラメータ query: GET送信で取得したデータ -->
    <router-link :to="{ name: 'user', params: { id: 1 }, query: { id: 'hoge' }}">ユーザー１</router-link>
    <!-- 遅延ローディング -->
    <router-link to="/about">About</router-link>
    <!-- transition -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

/* .fade-enter-active = transitionの画面遷移後の動き
   .fade-leave-active = transitionの画面から離れる時の動き（コンポーネント要素が無くなっていく始まり）
*/
.fade-enter-active,
.fade-leave-active {
  /* ２秒間で、透明度を1にしていく→ 画面を２秒かけて表示させる */
  transition: opacity 1s;
}
/* fade-enter = transitionの画面遷移時の状態
   fade-leave-to = transitionの画面から離れる前の状態
*/
.fade-enter,
.fade-leave-to {
  /* 透明度０ → 何も表示されない */
  opacity: 0;
}
</style>
