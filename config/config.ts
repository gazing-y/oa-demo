// 
import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
    // 路由配置
    routes,
    // 删除.umirc.ts,根目录新建config/config.ts，除了配置routes,还要配置layout、initialState、model

    // -------------------max的插件配置--------------------
    // 全局布局
    layout:{
        title:'HELLO  (*￣︶￣)',
        locale:false, //菜单国际化，默认开启
    },
    // 全局的初始数据流，getInitialState 的返回值
    initialState: {},
    // 数据流管理插件
    model: {},
})

