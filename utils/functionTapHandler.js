// utils.js
export function tapHandler(item) {
    if(item.url === '' || item.url === null) {
        uni.showToast({
            title: '暂未开通',
            icon: 'error'
        })
    }

    if (item.type === '0') {
        uni.navigateTo({
            url: item.url,
        });
    }

    if (item.type === '1') {
        uni.switchTab({
            url: item.url,
        });
    }

}
