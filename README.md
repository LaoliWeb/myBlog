
## 老李丶博客哦

## 特性

## 模块

```
- Home                      #  
  - index                   # 首页
```

## 目录结构

```
├── config                      # umi 配置，包含路由，构建等配置
│   ├── config.js               # umi 配置
│   └── route.config.js         # 路由配置
├── mock                        # 本地模拟数据
├── public
│   └── favicon.png             # Favicon
├── src
│   ├── assets                  # 本地静态资源
│   ├── components              # 业务通用组件
│   ├── layouts                 # 通用布局
│   ├── models                  # 全局 dva model
│   ├── pages                   # 业务页面入口和常用模板
│   │   ├── 404.js              # 404页面
│   │   └── document.ejs        # html模板文件
│   ├── services                # 后台接口服务
│   ├── utils                   # 工具库
│   ├── global.less             # 全局样式
│   ├── common.less             # less变量文件
│   └── app.js                  # 全局 JS
├── README.md
└── package.json
```

## 使用

### 使用命令行

```bash
$ yarn install       # 安装项目依赖
$ yarn start         # 访问 http://localhost:8000
$ yarn build         # 打包项目
```
