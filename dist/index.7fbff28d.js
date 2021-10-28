$('.addButton').on('click', ()=>{
    let url = window.prompt('请问你要添加的网址是?');
    if (url.indexOf('http') !== 0) url = 'https://' + url;
});

//# sourceMappingURL=index.7fbff28d.js.map
