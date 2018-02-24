if (window.CONFIG) {
    window.CONFIG.favicon = {
        visibilitychange: true,
        hidden: '/images/failure.ico',
        hide_text: '(つェ⊂) 我藏好了哦~ ',
        show: '/images/favicon.png',
        show_text: '(*´∇｀*) 被你发现啦~ '
    }
}

if (window.CONFIG.favicon.visibilitychange) {
    var OriginTitile = document.title
    var titleTime
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="icon"]').attr('href', window.CONFIG.favicon.hidden)
            document.title = window.CONFIG.favicon.hide_text
            clearTimeout(titleTime)
        }
        else {
            $('[rel="icon"]').attr('href', window.CONFIG.favicon.show)
            document.title = window.CONFIG.favicon.show_text
            titleTime = setTimeout(function () {
                document.title = OriginTitile
            }, 2000)
        }
    })
}
