// utils.js
export function functionBtnHandler(item) {
    if(item.url === '' || item.url === null) {
        notNow();
    }

    if (item.type === '0') {
        toPage(item);
    }

    if (item.type === '1') {
        toTabbar(item);
    }
}

export function notNow(){
    uni.showToast({
        title: '暂未开通',
        icon: 'error'
    })
}

export function toTabbar(item) {
    uni.switchTab({
        url: item.url,
    });
}

export function toPage(item) {
    uni.navigateTo({
        url: item.url,
    });
}

export function toLink(item) {
    uni.navigateTo({
        url: '/pages/test/test?url=' + item.url
    })
}