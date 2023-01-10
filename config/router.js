
const flag=process.env.NODE_ENV === 'development'


const routes=[
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '主页',
        path: '/home',
        component: './Home',
        layout:flag,
    },
    {
        name: '登录',
        path: '/login',
        component: './Login',
        layout:flag,
    },
    {
        name: '视频播放',
        path: '/Video',
        component: './Video',
        layout:flag,
    },
]
export default routes
