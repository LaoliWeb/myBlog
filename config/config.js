import routes from './route.config';

// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes, // 路由配置，单独写在route.config文件
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: { webpackChunkName: true },
            title: 'myBlog',
            dll: true,
            // hd: true,
            routes: {
                exclude: [
                    /models\//,
                    /services\//,
                    /model\.(t|j)sx?$/,
                    /service\.(t|j)sx?$/,
                    /components\//,
                ],
            },
        }],
    ],
    // 配置使用less
    lessLoaderOptions: {
        rules: [
            {
              test: /\.less$/,
              loader: 'less-loader', // compiles Less to CSS
              options: {
                javascriptEnabled: true // 支持编写Javascript
              }
            },
        ],
    },
    // 浏览器适配
    autoprefixer: {
      browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie> 8'],
      flexbox: true,
    },

    // 主题颜色
    theme: {
      'primary-color': '#87CEEB',
      'link-color': '#333',
      'text-color': '#333',
      'text-color-secondary': '#b3b3b3',
      'success-color': '#4996E3',
      'error-color': '#ff2727',
      'body-background': '#fff',
      'link-hover-color': '#4996E3',
      'border-color-base': '#e6e6e6',
    },
}
