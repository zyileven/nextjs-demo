## 一、创建基本项目
npx create-next-app@latest

## 二、初始化基本的项目内容
在 app/layout.tsx 中创建一个根布局，其中包含所需的 <html> 和 <body> 标记
创建包含一些初始内容的主页 app/page.tsx

此时创建了：app/layout.tsx 和 app/page.tsx 文件

## 三、 Nextjs 的App路由
默认情况下，App 内的组件都是 React 服务器组件。这是一种性能优化，可让您轻松采用，您也可以使用 use client 将他改为客户端组件。

- 文件夹用于定义路由。路由是嵌套文件夹的单一路径，按照文件系统的层次结构，从根文件夹向下延伸至包含 page.js 文件的最终叶文件夹。
- 文件用于创建显示在航段上的用户界面。

xxx.com/dashboard 对应的就是 app/dashboard 路径
xxx.com/dashboard/setting 对应的就是 app/dashboard/setting 路径

但是app目录并不会将所有路径视作路由，只有文件路径中包含 page.js 或 route.js 返回的内容才是可公开寻址的。

























