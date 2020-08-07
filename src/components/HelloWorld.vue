<template>
  <div class="hello">
    <!-- v-for -->
    <h1>v-for</h1>
    <ul v-for="(person,index) in persons" :key="index">
      <li>{{index + 1}}. {{ person.name }} さんは {{ person.age }}歳です。</li>
    </ul>
    <br />
    <!-- v-on -->
    <h1>v-on</h1>
    <h3 id="counter">{{ counter }}</h3>
    <button v-on:click="increment">カウントする</button>
    <button v-on:click="decrement">ディスカウントする</button>
    <br />
    <!-- v-bind -->
    <h1>v-bind</h1>
    <div id="img">
      <!-- v-bindは省略できる v-bind:src → :src -->
      <img :src="img.src" alt="イメージ" :width="img.width" />
    </div>
    <!-- v-onは省略できる v-on:click → @click -->
    <button @click="banana">バナナマン</button>
    <button @click="glasses">おぎやはぎ</button>
    <button @click="tokyo">東京03</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      persons: [
        {
          name: '日村',
          age: 55
        },
        {
          name: '設楽',
          age: 39
        }
      ],
      counter: 0,
      img: {
        src: 'https://ogre.natalie.mu/artist/6729/20190925/heiseikouhaku_01.jpg?impolicy=thumb_fit&width=640&height=640',
        width: '300',
        height: '300'
      }
    }
  },
  methods: {
    increment: function () {
      this.counter++
    },
    decrement: function () {
      this.counter--
    },
    banana: function () {
      this.img.src = 'https://ogre.natalie.mu/artist/6729/20190925/heiseikouhaku_01.jpg?impolicy=thumb_fit&width=640&height=640'
    },
    glasses: function () {
      this.img.src = 'http://www.p-jinriki.com/talent/img/profile/pic_ogiyahagi_mypage.jpg'
    },
    tokyo: function () {
      this.img.src = 'http://www.p-jinriki.com/talent/img/profile/tokyo03_mypage.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#counter {
  margin-left: 10px;
}
</style>
