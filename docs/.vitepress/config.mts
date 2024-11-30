import { defineConfig } from "vitepress";
import { generateSidebar } from 'vitepress-sidebar';
export default defineConfig({
  title: "Codery's 的开发文档",
  description: "Codery's Blog Site",
  // header标签里面插入的内容
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // 网站的logo
    logo: "/logo.svg",
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: "目录",
    },
    //自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 主题
    darkModeSwitchLabel: "深浅模式",
    // 返回顶部label
    returnToTopLabel: "返回顶部",
    // 搜索
    search: {
      provider: "local",
    },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present China Codery",
    },
    // 文档的最后更新时间
    // lastUpdated: {
    // text: "Updated at",
    // formatOptions: {
    //     dateStyle: "full",
    //     timeStyle: "medium",
    //   },
    // },
    nav: [
      { text: "首页", link: "/" },
      { text: "前端开发文档",items:[
        {
          text: '前端面经',
          link: '/interview/h5css-skill',
        }] },
      { text: "后端开发文档", link: "/markdown-examples" },
      { text: "工具导航栏", link: "/markdown-examples" },
      { text: "工作项目集", link: "/markdown-examples" }
    ],

    sidebar: {
      '/interview/': [{
        text: '前端面经',
          items: [
              { text: 'H5/CSS3知识积累', link: '/interview/h5css-skill' },
              { text: 'JS/TS知识积累', link: '/interview/js-skill' },
              { text: 'ES6知识积累', link: '/interview/ES6-skill' },
              { text: 'Vue知识积累', link: '/interview/vue-skill' },
              { text: '常用面试积累', link: '/interview/interview-skill' },
              { text: '实践知识积累', link: '/interview/practice-skill' }
          ]
      }]
    },
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/ChinaCarlos" }],
    // 部署的时候需要注意该参数避免样式丢失
    // base: "/vitepress-blog-template/",
  },
});
