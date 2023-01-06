import {defineConfig} from '@umijs/max';

export default defineConfig({
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    hash: true,
    layout:
        // process.env.NODE_ENV === 'development'
        //     ?
            {
                title: '@umijs/max',
                locale: false, // 默认开启，如无需菜单国际化可关闭
            },
            // : false,
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            name: '首页',
            path: '/home',
            component: './Home',
        },
        {
            name: '权限演示',
            path: '/access',
            component: './Access',
        },
        {
            name: ' CRUD 示例',
            path: '/table',
            component: './Table',
        },
        {
            name: ' Slate编辑器',
            path: '/blogEdit',
            component: './SlateEditor',
        },
    ],
    npmClient: 'npm',
});
