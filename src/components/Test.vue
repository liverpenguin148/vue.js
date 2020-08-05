<template>
  <div class="test">
    <!-- styleObjectでcssを指定 -->
    <h1>オブジェクトでのcss指定</h1>
    <div v-bind:class="styleObject">警告メッセージ</div>
    <button @click="Activate">背景を変更</button>

    <!-- 配列によるclass属性のバインディング -->
    <h1>配列でのcss指定</h1>
    <div v-bind:class="[warningClass, borderClass]">これは警告です</div>

    <!-- 条件付きレンダリング -->
    <h1>条件付きレンダリング</h1>
    <input v-if="isFormDisplay" type="text" placeholder="True" />
    <input v-else type="text" placeholder="False" />
    <button @click="changeFormDisplay">テキストボックスの切替</button>
    <br />
    <br />

    <!-- v-if-else -->
    <h1>v-else-if</h1>
    <input v-if="formType === 'user'" type="text" placeholder="ユーザー" />
    <input v-else-if="formType === 'password'" type="text" placeholder="パスワード" />
    <input v-else type="text" placeholder="その他" />
    <br />
    <br />

    <!-- v-showは初期表示は思いが、切り替えは早いので、頻繁に切り替える場合はv-show -->
    <h1>v-show</h1>
    <input v-show="formType === 'user'" type="text" placeholder="ユーザー" />
    <br />
    <br />

    <!-- v-model（textbox textarea checkbox） -->
    <h1>v-model</h1>
    <!-- textbox -->
    <input type="text" v-model="user" />
    <p>{{ user }}</p>
    <h1>textarea</h1>
    <!-- textarea -->
    <textarea v-model="article"></textarea>
    <!-- pre 改行まで反映される -->
    <pre>{{ article }}</pre>

    <!-- checkbox -->
    <input type="checkbox" v-model="agree" value="music" />音楽
    <br />
    <input type="checkbox" v-model="agree" value="sports" />スポーツ
    <br />
    <input type="checkbox" v-model="agree" value="movie" />映画
    <br />
    <!-- valueの値が出力 -->
    <p>{{ agree }}</p>

    <!-- radiobox -->
    <input type="radio" v-model="hobby" value="1" />音楽
    <br />
    <input type="radio" v-model="hobby" value="2" />スポーツ
    <br />
    <input type="radio" v-model="hobby" value="3" />映画
    <p>{{ hobby }}</p>

    <!-- select box -->
    <select v-model="selected">
      <!-- 無効属性 disabled -->
      <option disabled value>選択して下さい</option>
      <option
        v-for="(comedian,index) in comedians"
        :value="index+1"
        :key="index"
      >{{ comedian.name }}</option>
    </select>
    <!-- optionのvalueが表示される -->
    <p>{{ selected }}</p>
    <br />
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      // v-bind
      styleObject: {
        warning_red: false
      },
      warningClass: 'warning_blue',
      borderClass: 'border_yellow',

      // v-if, v-show
      isFormDisplay: false,
      formType: 'user',

      // v-model 入力された値が連動する
      user: 'model',
      article: '',
      // checkbox
      agree: [],
      // radiobox
      hobby: null,
      // select box
      comedians: [
        {
          name: 'オードリー'
        },
        {
          name: 'バナナマン'
        },
        {
          name: 'サンドウィッチマン'
        }
      ],
      selected: ''
    }
  },
  methods: {
    Activate: function () {
      this.styleObject.warning_red = !this.styleObject.warning_red
    },
    changeFormDisplay: function () {
      this.isFormDisplay = !this.isFormDisplay
    }
  }
}
</script>

<style scoped>
.warning_red {
  background-color: red;
}
.warning_blue {
  background-color: blue;
}

.border_yellow {
  border: solid 10px yellow;
}

.border_pink {
  border: solid 10px pink;
}
</style>
