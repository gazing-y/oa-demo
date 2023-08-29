// import { layout } from "@/app";
export default[
    {
        name:'收款账号列表',
        path:'/collect-account',
        icon:'home',
        routes:[
            {
                name:'账号列表',
                path:'/collect-account/manager',
                icon:'smil',
                component:'./ITManage/CollectAccount/ManagerList',
            }
        ]

    },
    {
        path:'/',
        component:'./Home',
        icon:'home'

    },
    {
        name:'test',
        path:'/test',
        component:'./Test',
        icon:'smile'
        // layout: false 细粒度关闭全局布局显示，只在一级生效
    },
    {
        path:'/*',
        component:'./404'
    },
];