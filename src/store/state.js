// 将state 内容模块化

let defaultCity = '北京'
// 如果要写localStorage,用try catch 不然有些用户禁止了localStorage或隐身模式，就会报错
try{
    // 如果本地有city这个localStorage，则用本地
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default {
    city:defaultCity
}