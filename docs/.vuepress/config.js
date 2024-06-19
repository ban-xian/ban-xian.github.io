module.exports = {
  title: "Jie's Blog",
  description: '以人为镜 可明得失 以码为镜 可通逻辑',
  theme: 'vuepress-theme-vdoing', // 博客主题
  markdown: {
    lineNumbers: true, // 代码行号
  },
  // 头部配置
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/imgs/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      'script',
      {
        'data-ad-client': 'ca-pub-7828333725993554',
        async: 'async',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      },
    ], // 网站关联Google AdSense 与 html格式广告支持
  ],
  // 博客主题配置
  themeConfig: {
    sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    logo: '/imgs/logo.jpg', // 导航栏logo
    repo: 'ban-xian/ban-xian.github.io', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: '/imgs/touxiang.jpg',
      name: '抬手一个div',
      slogan: '前端切图仔',
    },
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'Jie', // 必需
      link: 'https://github.com/ban-xian', // 可选的
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1281337643@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/ban-xian',
        },
        // {
        //   iconClass: 'icon-erji',
        //   title: '听音乐',
        //   link: 'https://music.163.com/#/playlist?id=755597173',
        // },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2021, // 博客创建年份
      copyrightInfo:
        'Ban Xian | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
    },
    // 导航栏配置
    nav: [
      // 没有二级导航时可以直接添加
      { text: '首页', link: '/' },
      // 有二级导航时
      {
        text: '前端',
        link: '/pages/5b6606/', //目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [{ text: '前端基础', link: '/pages/570ec7/' }],
      },
      {
        text: '页面',
        link: '/pages/3502c9/', //目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          { text: 'html', link: '/pages/80dd0e/' },
          { text: 'css', link: '/pages/c462de/' },
        ],
      },
      {
        text: '技术',
        link: '/pages/229bb9/', //目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          { text: '如何只展示当前地图视区的定位mark', link: '/pages/map/' },
          { text: 'npm私有仓库搭建', link: '/pages/npm/' },
        ],
      },
      {
        text: '更多',
        link: '/more/', //目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [{ text: '提示', link: '/pages/4c4927/' }],
      },
      {
        text: '关于',
        link: '/about/', //目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        // items: [
        //   { text: '文档', link: '/pages/77cec8/' },
        // ],
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
  },
  // 插件配置
  plugins: [
    // 本地插件
    // [require('./plugins/love-me'), { // 鼠标点击爱心特效
    //   color: '#11a8cd', // 爱心颜色，默认随机色
    //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    // }],

    'vuepress-plugin-baidu-autopush', // 百度自动推送

    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    [
      'thirdparty-search',
      {
        thirdparty: [
          // 可选，默认 []
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
          },
        ],
      },
    ],

    [
      'one-click-copy',
      {
        // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      'demo-block',
      {
        // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '503f098e7e5b3a5b5d8c5fc2938af002',
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'a3a3b480d9c05352a92c',
          clientSecret: '446feb2cfb0802c20f36380259063e2cc554d307',
          repo: 'ban-xian.github.io', // GitHub 仓库
          owner: 'ban-xian', // GitHub仓库所有者
          admin: ['ban-xian'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],
}
