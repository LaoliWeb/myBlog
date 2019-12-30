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
}
