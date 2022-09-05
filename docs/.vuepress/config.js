import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， 优秀的高级前端开发者 ！',
  description: '本书旨在学习和介绍前端相关的进阶知识，互相学习，共同提高',
  base:"/front-end_architecture/",
  port:3100,
  open:true,
  
  theme:defaultTheme({
    repoLabel: 'Github',
    repo: 'https://github.com/DavisYao88/front-end_architecture',
    lastUpdatedText:"最后更新",
    contributorsText:"DavisYao",
    editLink:false,
    sidebarDepth:6,
    navbar: [
        {
            text:"文档",
            link:"/"
        },
        {
            text:"基础知识",
            link:"https://gitbook.hslyblog.com/front_develop/"
        },
        {
            text:"博客",
            link:"https://www.hslyblog.com/"
        }
    ],
    sidebar: [
        
        { 
            text: "微前端", 
            link: "/micro-fronteds/什么是微前端.md" ,
            children:[
                { text: "初探single-spa", link: "/micro-fronteds/初探single-spa.md" },
                { text: "乾坤的诞生", link: "/micro-fronteds/乾坤的诞生.md" },
                { text: "轻量级micro-app", link: "/micro-fronteds/轻量级micro-app.md" },
                { text: "后起之秀ModuleFederation", link: "/micro-fronteds/后起之秀ModuleFederation.md" },
                { text: "基于乾坤的后台管理实践", link: "/micro-fronteds/基于乾坤的后台管理实践.md" },
            ]
        },
        
        { 
            text: "工程化", 
            link: "/engineering/什么是工程化.md",
            children:[
                { text: "工程化管理工具", link: "/engineering/工程化管理工具.md" },
                { text: "工程化构建工具", link: "/engineering/工程化构建工具.md" }
            ]
        },
        { text: "低代码", link: "/lowcode/" },
        { text: "源码共读", link: "/sourcecode/" },
        { 
            text: "实战篇", 
            link: "/code-practice/",
            children:[
                { text: "从零搭建组件库-vue2", link: "/code-practice/从零搭建组件库-vue2.md" },
                { text: "从零搭建组件库-vue3", link: "/code-practice/从零搭建组件库-vue3.md" },
                { text: "发布组件库到npm", link: "/code-practice/发布组件库到npm.md" },
                { text: "基于乾坤的后台管理实践", link: "/code-practice/基于乾坤的后台管理实践.md" },
                { text: "怎么开发一个Node命令行工具", link: "/code-practice/怎么开发一个Node命令行工具.md" },
            ] 
        }
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/DavisYao88/front-end_architecture.git' }
    ],
    footer: {
        message: '',
        copyright: 'Copyright © 2022-present '
    }
  })
})