$(document).on('click', '.card-img-top', function () {
    var imgSrc = $(this).data('img'); // 获取数据属性中的图片路径
    $('#modalImage').attr('src', imgSrc); // 更新模态框中的图片源
});