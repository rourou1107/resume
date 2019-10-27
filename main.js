let html = document.querySelector('#html') // 存放字符串的容器
let style = document.querySelector('#style') // 存放css的容器
let string = `/*你好,我叫张茹萍。
是一名前端开发工程师。
下面我展示一下我的前端功底。
现在我先将div改变一下样式。*/
#div1 {
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
/*
*下面我把div变为一个太极,首先它分为阴阳两面
*/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 4px 4px #ccc;
    border: none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 最后一步,增加一个魔丸一个灵丸。
 * 这里是魔丸
 */
 #div1::before {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000000;
    background:  radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);

 }
 /*
 * 这里是灵丸
 */
 #div1::after {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffffff;
    background:  radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
 }
`
let n = 0
let str1 = ''
// 将string展示到屏幕上
showString()


function showString(){
    // string = string.replace(/\n/g, '<br/>') // 在html中换行是<br/>
    // str1 = string.substring(0, n) 这样显示会看到<
    // string[n]没想到,是回去看的源代码才想起。注意一下
    if(string[n] === '\n'){
        str1 += '<br>'
    }else if(string[n] === ' '){
        str1 += '&nbsp;'
    }else {
        str1 += string[n]
    }
    html.innerHTML = str1
    style.innerHTML = string.substring(0, n) // 回车不会变为<br>,否则css会出错
    window.scrollTo(0, 99999) // 页面自动滚动
    html.scrollTo(0, 99999) // 页面自动滚动
    n += 1
    setTimeout(()=>{
        html.innerHTML = str1
        style.innerHTML = string.substring(0, n)
        if(n < string.length){
            showString()
        }
    }, 50)

}
