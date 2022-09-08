// 常用请求头封装

const HEADERS = {
  // 常用
  general:{
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  // 文件
  file:{
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  // .... 待扩展
}
