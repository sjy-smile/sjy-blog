vuepress-theme-hope

node 环境：版本 20.10.0    npm版本：10.2.4

创建项目模板

```bash
npm init vuepress-theme-hope my-docs
```

这里的 `my-docs` 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `my-docs` 文件夹。

创建过程说明

```bash
Need to install the following packages:
  create-vuepress-theme-hope@2.0.0-beta.233
Ok to proceed? (y) y
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 pnpm
生成 package.json...
? 设置应用名称
? 设置应用版本号 2.0.0
? 设置应用描述 A project of vuepress-theme-hope
? 设置协议 MIT
? 项目需要用到多语言么? y
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ y
? 你想要创建什么类型的项目？ blog
生成模板...
? 是否初始化 Git 仓库? y
? 选择你想使用的源 当前源
```

项目运行

```bash
pnpm docs:dev 启动开发服务器
pnpm docs:build 构建项目并输出
pnpm docs:clean-dev 清除缓存并启动开发服务器
```

推送到 GitHub

