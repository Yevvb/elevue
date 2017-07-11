import Vue from 'vue'
import Router from 'vue-router'

// 引入路由对应组件
import Hello from '@/components/Hello'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

Vue.use(Router)

// 导出路由
// 路由参数 router.params
export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
                // 嵌套路由使用 children: [{ path:,name:'',component:,}]
        },
        {
            path: '/goods',
            name: 'Goods',
            component: Goods
        },
        {
            path: '/ratings',
            name: 'Ratings',
            component: Ratings
        },
        {
            path: '/seller',
            name: 'Seller',
            component: Seller
        }
    ],
    linkActiveClass: 'active'
})