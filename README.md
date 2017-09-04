## 项目总结

vuejs 练习项目，来源于[慕课](http://coding.imooc.com/class/74.html)。

github源码地址 [ustbhuangyi](https://github.com/ustbhuangyi/vue-sell)。

通过该项目，了解了 vue 的基本使用方法，相当于入门。对于 Vue 其中的很多细节还需要挖掘。但是从中还是学到了很多其他技巧

### 项目收获

- [x] 了解读懂 webpack 基本配置
- [x] vue-cli 的使用
- [x] 如何使用 es-lint 来规范代码风格，及如何配置 es-lint
- [x] vue 组件编写
- [x] 图标字体，类似 iconfont，之前有使用过
- [x] flex 布局简单使用，详细教程可以看[廖雪峰老师的教程](www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [x] 1像素边框的实现。（这里是根据设备像素比来进行缩放，参考：移动端1像素边框的真正实现(blog.csdn.net/zfangls/article/details/53338655)，其他如设置屏幕宽度恒定750）
- [x] sticky footer 的实现（第一次知道这么叫，就是页脚在没有竖向滚动条时在屏幕最底部，出现滚动条是会自动被内容撑开）
- [x] stylus 的使用（这个我比较喜欢，写起来没有多余的代码看起来比较爽，但是缩进有时候会给自己挖坑，不推荐）
- [x] 利用 CSS 来对不同设备像素比（device pixel ratio）做适配，达到响应式图片的设计
- [x] 图片占位小技巧（利用 padding 其实能做很多事情，顺便推荐了解 [BFC & IFC](http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)）
- [x] ios 端中的 backdrop-filter: blur(10px) 属性
- [x] star 组件抽象，根据尺寸来获得不同的排版布局
- [x] 小球动画的简单实现（cubic-bezier的使用，[CSS ceaser](https://matthewlein.com/ceaser/)）
- [x] 移动端的数据存储（或者说web端的数据存储，localstorage 的使用）
- [x] 组件的思想，webpack 打包模块化的处理，图片、js压缩、CSS自动编译等等这些自动化的工具确实带来了很大的便利
- [x] ...

### 亟待解决

- [ ] Vue 的生命周期，更多的 API 实现（像 $nextTick，以及各种 hook 函数）
- [ ] Vue 的状态管理
- [ ] Vue router 的使用注意事项
- [ ] mock 数据的处理（有空要把 DOTA2 的英雄数据给爬一遍，嘿嘿）
- [ ] Vue 的核心思想实现，听作者说过但是没动手做过（想把JS/react结合起来看不同）
- [ ] [Vueconf 视频](https://ke.qq.com/course/200463)还没刷
- [ ] 掘金作者 kalasoo Vue 的相关文章没有仔细读，[点这里](https://juejin.im/post/591fa2d0a0bb9f005f3ccd1b)
- [ ] ...

### 更多

还有很多东西不能够列举出来，只有在写代码的时候能够感受到！

Vue 带来的是与 jQuery 全然不同的体验，从 `.vue` 文件模板开始，到各种组件、路由、状态管理。这才是刚刚开始！

### 项目启动

```bash

  # 安装 package.json 中的依赖
  npm install

  # 运行开发者版本，打开浏览器调试
  npm run dev

  # 打包
  npm run build

  # express 启动查看打包后版本
  node prod.server.js

```

