chrome.runtime.onInstalled.addListener(details => {
    //创建菜单按钮
    chrome.contextMenus.create({
        id: 'Menu_1',
        title: 'Div画框',
        contexts: ['all']
    })
    chrome.contextMenus.create({
        id: 'Menu_2',
        title: '编辑网页',
        contexts: ['all']
    })
    chrome.contextMenus.create({
        id: 'Menu_3',
        title: '释放右键',
        contexts: ['all']
    })
    chrome.contextMenus.create({
        id: 'Menu_4',
        title: '打印密码',
        contexts: ['all']
    })
    chrome.contextMenus.create({
        id: 'Menu_5',
        title: '释放F12',
        contexts: ['all']
    })
    chrome.contextMenus.create({
        id: 'Menu_6',
        title: '智能绿化',
        contexts: ['all']
    })
});

//监听回调，并发送信息到content.js
function contextClick(info, tab) {
    const {menuItemId} = info;

    if (menuItemId === 'Menu_1') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "Div画框"}, function(response) {});
        });
    }
    if (menuItemId === 'Menu_2') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "编辑网页"}, function(response) {});
        });
    }
    if (menuItemId === 'Menu_3') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "释放右键"}, function(response) {});
        });
    }
    if (menuItemId === 'Menu_4') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "打印密码"}, function(response) {});
        });
    }
    if (menuItemId === 'Menu_5') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "释放F12"}, function(response) {});
        });
    }
    if (menuItemId === 'Menu_6') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "智能绿化"}, function(response) {});
        });
    }
}

//设置监听
chrome.contextMenus.onClicked.addListener(contextClick)