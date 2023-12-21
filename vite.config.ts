import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

/*
import {resolve} from 'path'
// 将路径变成一个方法   无法正常使用
function pathResolve(dir:string){
  return resolve(process.cmd(),'.',dir)
}
*/


export default defineConfig({
  plugins: [
      vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
 /*一种  将路径替变成方法的 函数
 resolve:{
    alias:[
      {
        find:'@',
        replacement:pathResolve('src')
      }
    ]
  },*/
  // 设置端口

  // 设置 本地和本地的路径
  server:{
    host:'localhost',
    port:8000
  }
})
