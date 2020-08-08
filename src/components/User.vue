<template>
  <div class="user">
    <!-- 動的にユーザーの情報を表示 $routeにより、pathの:idが表示(URLのパラメータを取得)-->
    <h1>URLのパラメータを取得</h1>
    <p>{{ this.$route.params.id }}</p>

    <!-- GET送信で取得したデータを表示 -->
    <h1>GET送信で取得したデータを表示</h1>
    <p>{{ this.$route.query.id }}</p>

    <!-- child-routerの表示 -->
    <router-link :to="{ name: 'first'} ">First</router-link>
    <router-link :to="{ name: 'second'} ">Second</router-link>
    <!-- buttonに変更する tag="button" -->
    <router-link tag="button" :to="{ name: 'first' }">First</router-link>
    <router-link tag="button" :to="{ name: 'second' }">Second</router-link>
    <!-- animation -->
    <transition name="shake" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

// scoped → User.vue内で反映される
<style scoped>
/* 選択されたrouter-linkのcssを指定 */
.router-link-exact-active {
  font-size: 20px;
  font-weight: bold;
}
.shake-enter-active {
  animation: shake 1s linear;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

/* shakeの１秒間(100%)のうち、どのタイミングでどのような動きをするか */
@keyframes shake {
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0px, 0);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0px, 0);
  }
}
</style>
