/*
 * @Author: your name
 * @Date: 2020-04-03 13:21:45
 * @LastEditTime: 2020-04-03 13:27:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \oa-ui\vue.config.js
 */
module.exports = {
    // 修改 src 目录 为 examples 目录
    pages: {
        index: {
        entry: 'examples/main.js',
        template: 'public/index.html',
        filename: 'index.html'
        }
    },
    lintOnSave: false // 关闭eslint
}