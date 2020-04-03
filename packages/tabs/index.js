/*
 * @Author: your name
 * @Date: 2020-04-03 13:41:47
 * @LastEditTime: 2020-04-03 13:45:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oa-ui\packages\tabs\index.js
 */
// 导入组件
import Tabs from './tabs'
import TabPane from './tab-pane/index.js'

// 存储组件列表
const components = [
    TabPane,
    Tabs
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出install，可以 Vue.use() 全局引入
    install,
    // 以下是具体的组件列表，可以按需加载
    TabPane,
    Tabs
}