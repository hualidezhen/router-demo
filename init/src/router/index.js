import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shejiView from '../views/shejiView.vue'
import shujuView from '../views/shujuView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'App',
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: '/HomeView',
          name: 'HomeView',
          meta: {
            title: '动态设计',
            show: true
          },
          component: HomeView,
          children: [
            {
              path: '/First',
              name: 'First',
              meta: {
                title: "第一章",
                icon: 'AddLocation',
                show: true,
              },
              children: [
                {
                  path: '/HomeView/FirstChapter',
                  name: 'FirstChapter',
                  meta: {
                    title: "第一节",
                    icon: 'Brush',
                    show: true,
                  },
                  component: () => import('../components/page/FirstChapter.vue'),
                },
                {
                  path: '/HomeView/FirstChapter1-2',
                  name: 'FirstChapter1-2',
                  meta: {
                    title: "第二节",
                    icon: 'Bicycle',
                    show: true,
                  },
                  component: () => import('../components/page/FirstChapter1-2.vue'),
                },
                {
                  path: '/HomeViewFirstChapter1-3',
                  name: '/FirstChapter1-3',
                  meta: {
                    title: "第三节",
                    icon: 'Aim',
                    show: true,
                  },
                  children: [
                    {
                      path: '/HomeView/FirstChapter1-3-1',
                      name: 'FirstChapter1-3-1',
                      meta: {
                        title: "第一篇",
                        icon: 'Baseball',

                        show: true,
                      },
                      component: () => import('../components/page/FirstChapter1-3-1.vue'),
                    },
                    {
                      path: '/HomeView/FirstChapter1-3-2',
                      name: 'FirstChapter1-3-2',
                      meta: {
                        title: "第二篇",
                        icon: 'Baseball',

                        show: true,
                      },
                      component: () => import('../components/page/FirstChapter1-3-2.vue'),
                    },
                    {
                      path: '/HomeView/FirstChapter1-3-3',
                      name: 'FirstChapter1-3-3',
                      meta: {
                        title: "第三篇",
                        icon: 'Baseball',

                        show: true,
                      },
                      // component: () => import('../components/page/FirstChapter1-3-3.vue'),
                      children: [{
                        path: '/HomeView/FirstChapter1-3-1',
                        name: 'FirstChapter1-3-1',
                        meta: {
                          title: "第一段",
                          icon: 'Baseball',

                          show: true,
                        },
                        component: () => import('../components/page/FirstChapter1-3-1.vue'),
                      },
                      {
                        path: '/HomeView/FirstChapter1-3-2',
                        name: 'FirstChapter1-3-2',
                        meta: {
                          title: "第二段",
                          icon: 'Baseball',

                          show: true,
                        },
                        component: () => import('../components/page/FirstChapter1-3-2.vue'),
                      },],
                    },
                  ]
                },
              ]
            },
            {
              path: '/HomeView/Second',
              name: 'Second',
              meta: {
                title: "第二章",
                icon: 'Cellphone',
                show: true,
              },
              children: [
                {
                  path: '/HomeView/SecondChapter',
                  name: 'SecondChapter',
                  meta: {
                    title: "第一节",
                    icon: 'ChatDotRound',
                    show: true,
                  },
                  component: () => import('../components/page/SecondChapter.vue'),
                },
                {
                  path: '/HomeView/SecondChapter2-2',
                  name: 'SecondChapter2-2',
                  meta: {
                    title: "第二节",
                    icon: 'ChatDotRound',

                    show: true,
                  },
                  component: () => import('../components/page/SecondChapter2-2.vue'),
                },
              ]
            },
            {
              path: '/HomeView/Thrid',
              name: 'Thrid',
              meta: {
                title: "第三章",
                icon: 'ChatLineRound',
                show: true,
              },
              children: [
                {
                  path: '/HomeView/ThirdChapter',
                  name: 'ThirdChapter',
                  meta: {
                    title: "第一节",
                    icon: 'Burger',
                    show: true,
                  },
                  component: () => import('../components/page/ThirdChapter.vue'),
                },
                {
                  path: '/HomeView/ThirdChapter3-1',
                  name: 'ThirdChapter3-1',
                  meta: {
                    title: "第二节",
                    name: 'ThirdChapter',
                    icon: 'Burger',
                    show: true,
                  },
                  component: () => import('../components/page/ThirdChapter3-1.vue'),
                },
                {
                  path: '/HomeView/ThirdChapter3-2',
                  name: 'ThirdChapter3-2',
                  meta: {
                    title: "第三节",
                    name: 'ThirdChapter',
                    icon: 'Burger',
                    show: true,
                  },
                  component: () => import('../components/page/ThirdChapter3-2.vue'),
                },
                {
                  path: '/HomeView/ThirdChapter3-2',
                  name: 'ThirdChapter3-2',
                  meta: {
                    title: "第四节",
                    name: 'ThirdChapter',
                    icon: 'Burger',
                    show: true,
                  },
                  component: () => import('../components/page/ThirdChapter3-2.vue'),
                  children:[
                    {
                      path: '/HomeView/ThirdChapter3-2',
                      name: 'ThirdChapter3-2',
                      meta: {
                        title: "第一行",
                        name: 'ThirdChapter',
                        icon: 'Burger',
                        show: true,
                      },
                      component: () => import('../components/page/ThirdChapter3-2.vue'),
                    },
                    {
                      path: '/HomeView/ThirdChapter3-2',
                      name: 'ThirdChapter3-2',
                      meta: {
                        title: "第二行",
                        name: 'ThirdChapter',
                        icon: 'Burger',
                        show: true,
                      },
                      component: () => import('../components/page/ThirdChapter3-2.vue'),
                    },
                    {
                      path: '/HomeView/ThirdChapter3-2',
                      name: 'ThirdChapter3-2',
                      meta: {
                        title: "第三行",
                        name: 'ThirdChapter',
                        icon: 'Burger',
                        show: true,
                      },
                      component: () => import('../components/page/ThirdChapter3-2.vue'),
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          path: '/shejiView',
          name: 'shejiView',
          meta: {
            title: '勘察设计',
            show: true
          },
          component: shejiView,
          children: [
            {
              path: '/shejiView/shejiView1',
              name: 'shejiView1',
              meta: {
                title: '地质123信息',
                show: false,
              },
              component: () => import('../components/page/shejiView1.vue'),
            },
            {
              path: '/shejiView2',
              name: 'shejiView2',
              meta: {
                title: '设计信息',
                show: false,
              },
              children:[
                {
                  path: '/shejiView/shejiView3',
                  name: 'shejiView3',
                  meta: {
                    title: "设计信息1",
                    icon: 'ChatDotRound',
                    show: true,
                  },
                  component: () => import('../components/page/shejiView3.vue'),
                },
              ]
            },
          ]
        },
        {
          path: '/shujuView',
          name: 'shujuView',
          meta: {
            title: '施工数据',
            show: true
          },
          component: shujuView,
          children: [
            {
              path: '/shujuView0',
              name: 'shujuView0',
              meta: {
                title: '掌子面',
                show: true,
              },
              children:[
                {
                  path: '/shujuView/shujuView1',
                  name: 'shujuView1',
                  meta: {
                    title: "掌子面1",
                    icon: 'ChatDotRound',
                    show: true,
                  },
                  component: () => import('../components/page/shujuView1.vue'),
                },
                {
                  path: '/shujuView/shujuView2',
                  name: 'shujuView2',
                  meta: {
                    title: "掌子面2",
                    icon: 'ChatDotRound',

                    show: true,
                  },
                  component: () => import('../components/page/shujuView2.vue'),
                },
              ]
            },
            {
              path: '/shujuView5',
              name: 'shujuView5',
              meta: {
                title: '超前地质预报',
                show: true,
              },
              children:[
                {
                  path: '/shujuView/shujuView3',
                  name: 'shujuView3',
                  meta: {
                    title: "超前地质预报1",
                    icon: 'ChatDotRound',
                    show: true,
                  },
                  component: () => import('../components/page/shujuView3.vue'),
                },
                {
                  path: '/shujuView/shujuView4',
                  name: 'shujuView4',
                  meta: {
                    title: "超前地质预报2",
                    icon: 'ChatDotRound',

                    show: true,
                  },
                  component: () => import('../components/page/shujuView4.vue'),
                },
              ]
            }
          ]
        }
      ]
    }


  ]
})

export default router

