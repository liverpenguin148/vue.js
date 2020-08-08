import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Janken from '@/components/Janken'
import Component from '@/components/Component'
import User from '@/components/User'
import FirstChild from '@/components/user/FirstChild'
import SecondChild from '@/components/user/SecondChild'

/* eslint-disable */ // ← esintのルールを無視できる
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/janken',
      name: 'Janken',
      component: Janken
    },
    {
      path: '/component',
      name: 'Component',
      component: Component
    },
    { // 動的に表示するページを変更する
      path: '/user/:id',
      name: 'user',
      // child-router
      component: User,
      children: [{
          path: 'first',
          name: 'first',
          component: FirstChild
        },
        {
          path: 'second',
          name: 'second',
          component: SecondChild
        }
      ]
    },
    {
      // 予期しないURLが入力された場合に、特定のページへリダイレクトさせる（ワイルドカードとリダイレクト）
      // 注意!! 上から順にルートが決まるので、一番上にワイルドカードを使用してしまうと、全てがそのパスになってしまう
      path: '*',
      redirect: '/'
    },
    // 遅延ローディング →　クリックされた場合のみ、そのコンポーネントを表示するようにする
    {
      path: '/about',
      name: 'about',
      component: () =>
        import( /* webpackChunkNmae: "about" */ '@/components/About')
    }
  ]
})
