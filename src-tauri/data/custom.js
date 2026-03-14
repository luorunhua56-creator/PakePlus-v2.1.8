window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}
// 页面加载完成后自动静默打印
window.addEventListener('load', function() {
  // 检查是否存在该工具的打印接口
  if (window.yimenapi && window.yimenapi.print) {
    window.yimenapi.print({
      silent: true,        // 静默打印（不弹出打印对话框）
      printBackground: true // 打印页面背景色和图片
    });
  } else {
    // 备用方案：如果接口不存在，使用浏览器原生打印（会弹窗，仅用于测试）
    // window.print();
    console.log("静默打印接口未找到，将使用浏览器打印（会弹窗）");
  }
});
window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
