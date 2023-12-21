// 创建路由和 路由的哈希模式   想换成历史模式删除 Hash
import {createRouter,createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/login/index.vue'
import dashboard from "./modules/dashboard.ts";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
        name:'Login',
        meta:{
            title:'登录'
        }
    },

]
const baseRoutes = [...routes,...dashboard]
console.log(baseRoutes);
export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。这里使用的是 历史模式
    history: createWebHistory(),
    routes:baseRoutes, // `routes: routes` 的缩写
})

router.beforeEach((to,_from,next)=>{
    console.log(to,_from)
    console.log(to.meta.title)
    document.title = (to?.meta?.title as string) || document.title
    if (to.name != 'Login'){
        //判断token是否存在 ，是否要登录
        if (!localStorage.getItem('token')){
         next({
                path:'login',
                query:{
                    redirect:to.fullPath
                }
            })
        }
    }
        next()

})