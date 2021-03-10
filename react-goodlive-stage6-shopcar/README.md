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
    配置**package.json**文件
    "dev": "concurrently \"npm start\" \" nodemon mock/index.js \""

### 选择城市页面
1. 页面布局：City  HeadTitle   CityCurrent   CityList
    事件传递参数
2. 关联Redux
    安装依赖：`redux react-redux redux-devtools-extension`
3. redux操作：store  reducer  action constants
4. 前端关联Redux
    index -> provider  city -> 读写操作   home -> 读取操作
5. 首页数据根据城市变化 接口修改  传递城市参数
6. 本地存储：刷新或者再次进入的时候，存储用户选择城市

### 搜索功能
1. 增加搜索页面，配置路由
2. 搜索页面的**跳转**
    ```
    keyUpHandle = (e) =>{
        if(e.keyCode === 13){
            this.props.history.push("/search/"+this.state.searchValue)
        }
    }
    ```
3. 搜索的头部组件:SearchHead
4. 创建搜索框：SearchInput，受控组件
5. 增加列表页面：SearchList,增加视图页面：SearchListView,增加了Item组件
6. LoadMore加载更多组件：
    1. 在钩子函数componentDidMount中，增加滚动事件监听
        ```
        srcollHandle() {
            var winHeight = document.documentElement.clientHeight;
            var timer = this;
            if (this.divContainer.current) {
                let currentElementHeight = this.divContainer.current.getBoundingClientRect().top;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    if (currentElementHeight < winHeight) {
                        this.props.onLoadMore();
                    }
                }, 300)
            } else {
                clearTimeout(timer);
            }
        }
        ```
    2. getBoundingClientRect解释：获取当前元素距离边界四个方向的距离
    3. 节流和防抖的操作
        ```
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            if (currentElementHeight < winHeight) {
                this.props.onLoadMore();
            }
        }, 300)
        ```
    4. 重复搜索实现
        ```
        loadMoreHandle = () => {
            const keywords = this.props.keywords;
            const cityName = this.props.cityName;
            const page = this.state.page;
            this.http(keywords, cityName, page);
        }
        ```
        ```
        async componentDidUpdate(prevProps, prevState) {
            if (prevProps.keywords !== this.props.keywords) {
                const keywords = this.props.keywords;
                const cityName = this.props.cityName
                await this.setStateAsync({
                    page: 1,
                    searchData: []
                });
                this.http(keywords, cityName, this.state.page);
            }
        }

        setStateAsync(state) {
            return new Promise((resolve) => {
                this.setState(state, resolve)
            })
        }
        ```
    5. 优化组件
        常见错误：
            1.定时器在组件卸载之前必须清除
            2.持续事件(滚动)在组件卸载之前必须清除
            3.网络请求在组件卸载之前必须清除
        清除定时器：
            clearTimeout(timer);
        清除滚动事件
            componentWillUnmount() {
                window.removeEventListener('scroll', this.srcollHandle);
            }
        清除网络请求
            componentWillUnmount(){
                this.setState = (state,callback) =>{
                    return;
                }
            }

### 详情功能
1. 创建详情页视图:Detail,增加路由跳转
2. 创建详情页视图：DetailInfo和DetailInfoView
3. 增加了tab切换视图:components -> tabs
    ```
    <ul className="Tab_title_wrap">
        {
            React.Children.map(this.props.children,(element,index) =>{
                return <li onClick={ () =>{ this.clickTabHandle(index) } } className={ this.check_title_index(index) }>{ element.props.tabName }</li>
            })
        }
    </ul>
    ```
4. 增加了评论视图:Comment和CommentView -> 使用了LoadMore加载更多


### 收藏与登陆
1. 创建登陆页面：Login
2. 登陆的username存入到Redux中
3. 创建收藏的视图：BuyAndStore
4. 登陆判断，是否收藏的判断
    ```
    storeHandle = () => {
        const username = this.props.login.username;
        if (username) {
            if (this.isStore()) {
                // 取消收藏
                this.props.unCollect({
                    id: this.props.id
                })
                this.setState({
                    isCollect:false
                })
            } else {
                this.props.collect({
                    id: this.props.id
                })
                this.setState({
                    isCollect:true
                })
            }

        } else {
            this.props.history.push("/login")
        }
    }
    ```
    ```
    isStore() {
        const currentId = this.props.id;
        const collects = this.props.collects
        return collects.some((element) => {
            return element.id == currentId;
        })
    }
    ```
    收藏初始化状态改变
    ```
    componentDidMount(){
        this.setState({
            isCollect:this.isStore()
        })
    }
    ```
5. 收藏功能实现：数据存储
    ```
    switch (action.type) {
        case COLLECTED:
            return [
                ...state,
                action.data
            ]
        case UNCOLLECTED:
            return state.filter(function (item) {
                if (item.id != action.data.id) {
                    return item;
                }
            })
        default:
            return state;
    }
    ```
### 购物车
1. 创建购物车页面：Cart，配置路由
2. 创建购物车页面的用户信息展示：CartInfo
3. 创建购物车的数据列表：OrderList
4. 购物车评论功能实现
    commentState:{
        0:未评价
        1:评价中
        2:已评价
    }
    细节：因为commentState是props中的，所以为了可修改，组件内创建状态commentState
5. 根据用户的点击事件
    评价与已评价视图切换
    ```
    {
        commentState === 0 ?
            <button className="btn" onClick={this.clickHandle}>评价</button>
            : commentState === 1 ? '' :
                <button className="unseleted-btn btn">已评价</button>
    }
    ```
    评论框的呈现
    ```
    commentState === 1 ?
    <div className="comment-text-container">
        <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={this.feelBackText}></textarea>
        <button className="btn" onClick={this.onSubmitHandler}>提交</button>
        <button className="btn unseleted-btn" onClick={this.onCancelHandler}>取消</button>
    </div>
    : ""
    ```

React相关视频：
链接：https://pan.baidu.com/s/1NxG2yFGIdwmXjJNAnjlPhw   提取码：qpmi 