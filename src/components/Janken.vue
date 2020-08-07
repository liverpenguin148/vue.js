<template>
  <!-- 敵の手 -->
  <div id="janken">
    <h1>{{ result }}</h1>
    <div class="enemy">
      <h2>CPU</h2>
      <img :src="enemyHand" width="100px" />
    </div>
    <div class="player">
      <h2>あなた</h2>
      <div class="rock">
        <img src="@/assets/rock.jpg" width="100px" />
        <button @click="fight(0)">グーを選択</button>
      </div>
      <div class="scisors">
        <img src="@/assets/scisors.jpg" width="100px" />
        <button @click="fight(1)">チョキを選択</button>
      </div>
      <div class="paper">
        <img src="@/assets/paper.jpg" width="100px" />
        <button @click="fight(2)">パーを選択</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Janken',
  data () {
    return {
      hand: ['rock', 'scisors', 'paper'],
      enemyHand: '',
      result: '手を選択してね'
    }
  },
  methods: {
    fight: function (myHandNumber) {
      // ランダムで敵の手を決める（0: グー, 1: チョキ、2：パー）
      let enemyHandNumber = Math.floor(Math.random() * Math.floor(3))

      // 相手の手の画像イメージを取得
      if (enemyHandNumber === 0) {
        this.enemyHand = require('@/assets/rock.jpg')
      } else if (enemyHandNumber === 1) {
        this.enemyHand = require('@/assets/scisors.jpg')
      } else {
        this.enemyHand = require('@/assets/paper.jpg')
      }

      // 自分の手の数値 - 相手の手の数値 = 0 + 3 の値を取得
      let judgeNumber = myHandNumber - enemyHandNumber + 3

      // judgeNumberを３で割ったあまりによって、結果を判定
      if (judgeNumber % 3 === 0) {
        // あまりが０のとき、あいこ
        this.result = 'あいこです！！'
      } else if (judgeNumber % 3 === 2) {
        // あまりが２のとき、勝ち
        this.result = 'あなたの勝ちです！！'
      } else if (judgeNumber % 3 === 1) {
        // あまりが１のとき、負け
        this.result = 'あなたの負けです！！'
      }
      // this.enemyHand = require('@/assets/rock.jpg')
      console.log(this.result)
    }
  }
}

</script>

<style scoped>
.rock {
  display: inline-block;
}
.scisors {
  display: inline-block;
}
.paper {
  display: inline-block;
}
</style>
