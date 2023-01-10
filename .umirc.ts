import {defineConfig} from '@umijs/max';
// @ts-ignore
import  routes from './config/router.js'

// const newRoutes=routes.map((v:{layout:boolean}) => {
//     for (const vKey in v) {
//         console.log(vKey)
//         if (vKey==="layout"){
//             return {...v,layout:true}
//             console.log(11111111)
//         }else return v
//     }
// })

// console.log(newRoutes,"newRoutes====")
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
    routes:routes,
    npmClient: 'npm',
});
