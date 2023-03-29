
const flag=false
    // process.env.NODE_ENV === 'development'


const routes=[
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '主页',
        path: '/home',
        component: './Home',
        // layout:flag,
    },
    {
        name: '登录',
        path: '/login',
        component: './Login',
        // layout:flag,
    },
    {
        name: '视频播放',
        path: '/Video',
        component: './Video',
        // layout:flag,
    },
    {
        name: 'webGl',
        path: '/webGl',
        component: './WebGl',
        // layout:flag,
    },
    {
        name: '博客',
        path: '/blog',
        component: './Blog',
        // layout:flag,
    },
]
export default routes
