## GoodLive

### 首页实现
1. 支持Less环境
    安装依赖：npm install --save less less-loader
    修改配置文件
2. 增加了less全局样式:state/css/common.less
3. 支持REM：/public/index.html
4. 配置路由
    安装依赖：npm install --save react-router-dom
    增加了配置页面：router/AppRouter.js
5. 引入iconfont:阿里字体图标库/icomoon
6. 导航实现:components/FootNav
7. 顶部视图:components/Head
8. 轮播图:Swiper
    参考地址：https://react-swipeable-views.com/demos/demos/
    安装依赖：npm install --save react-swipeable-views
9. 服务器搭建
    增加了Node：Server
10. 跨域处理
11. 网络请求的处理
12. 前台获取数据
13. 前后台合并运行
    安装依赖：
        npm install --save-dev nodemon
        npm install -g concurrently
        npm install --save-dev concurrently
    配置package.json文件
    "dev": "concurrently \"npm start\" \" nodemon mock/index.js \""

### 选择城市页面
1. 页面布局：City  HeadTitle   CityCurrent   CityList
    事件传递参数
2. 关联Redux
    安装依赖：redux react-redux redux-devtools-extension
3. redux操作：store  reducer  action constants
4. 前端关联Redux
    index -> provider  city -> 读写操作   home -> 读取操作
5. 首页数据根据城市变化 接口修改  传递城市参数
6. 本地存储：刷新或者再次进入的时候，存储用户选择城市