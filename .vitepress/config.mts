import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/linlei.github.io/',
  title: "Codery的开发文档",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/static/logo.png',
    siteTitle: 'codery的开发文档',
    outline:{level:[2,3],label:"当前页"},
    //搜索模块
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '软考必背', link: '/ruankao/must' },
      { text: '前端开发', items: [
        {
          text: '开发规范标准',
          link: '/devStandard/dev-standard',
        },{
          text: '前端面试题库',
          link: '/interview/h5css-skill',
        },{
          text: '前端可视化',
          link: '/interview/webVisualization',
        },{
          text: '前端工程化',
          link: '/interview/engineering',
        },{
          text: 'WebGIS开发',
          link: '/webGISDev/GaoD_AMap',
        },{
          text: 'WebGL开发',
          link: '/interview/webGLDev',
        },{
          text: '前端进阶',
          link: '/vueAdvance/vue_origin',
        }
      ]},
      { text: '后端开发', items: [
        {
          text: '开发规范标准',
          link: '/devStandard/backEndInterView',
        }
      ]},
      { text: '开发工具导航', link: '/tools-navs' },
      { text: '工作项目集', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '软考必背',
        items: [
          { text: '综合必背', link: '/ruankao/must' }
        ]
      },
      {
        text: '开发规范标准',
        items: [
          { text: 'HTML编码规范', link: '/devStandard/dev-standard' },
          { text: 'CSS编码规范', link: '/devStandard/css-standard' },
          { text: 'JS编码规范', link: '/devStandard/js-standard' },
          { text: 'Vue编码规范', link: '/devStandard/vue-standard' },
          { text: '项目命名规范', link: '/devStandard/vue-standard' },
          { text: '项目构建规范', link: '/devStandard/build-standard' }
        ]
      },
      {
        text: '面试技巧题库',
        items: [
          { text: 'H5+CSS3知识汇总', link: '/interview/h5css-skill' },
          { text: 'JS知识汇总', link: '/interview/js-skill' },
          { text: 'ES6知识汇总', link: '/interview/ES6-skill' },
          { text: 'Vue知识汇总', link: '/interview/vue-skill' },
          { text: '综合知识汇总', link: '/interview/interview-skill' },
          { text: '实践知识汇总', link: '/interview/practice-skill' }
        ]
      },
      {
        text: 'WebGIS开发手册',
        items: [
          { text: '高德地图JSAPI', link: '/webGISDev/GaoD_AMap' },
          { text: 'CesiumJS', link: '/interview/js-skill' },
          { text: 'Vue-Cesium', link: '/interview/ES6-skill' },
          { text: 'OpenLayers', link: '/interview/vue-skill' }
        ]
      },
      {
        text: '前端进阶',
        items: [
          { text: 'TS学习笔记', link: '/vueAdvance/ts_doc' },
          { text: 'Vue源码学习笔记', link: '/vueAdvance/vue_origin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linlei1120' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present gqk'
    }
  }
})
