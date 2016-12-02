/** 2016-11-27 22:33:32
 自定义的js脚本
 */
$(function () {
    //自定义轮播图,根据屏幕宽度的变化决定轮播图片应该展示什么
    function resize() {
        //1.首先获取当前的屏幕大小
        var screenWidth = $(window).width();
        //2.比较当前屏幕大小和最小屏幕
        var isSmallScreen = screenWidth < 768;
        //3.获取轮播图的jquery对象
        $('#main_ad > .carousel-inner > .item').each(function (index, element) {
            //4.将dom对象转换成jquery对象
            var $element = $(element);
            //5.通过比较的屏幕大小，获取对应的图片
            var imageUrl = isSmallScreen ? $element.data('image-xs') : $element.data('image-lg');
            //5.通过比较的大小给轮播图设置背景图片
            $element.css('backgroundImage', 'url("' + imageUrl + '")');
            //6.因为我们需要下屏幕时轮播图等比例缩放
            if (isSmallScreen) {
                $element.html('<img src="' + imageUrl + '"+alt="">');
            } else {
                $element.empty();
            }
        });
        //初始化tooltip
        $("[data-toggle='tooltip']").tooltip();

        //设置产品推荐的横向滚动条
        //1.首先动态获取ul下面所有的li
        var $ulContainer = $('.nav-tabs');
        var lisWidth = 50;
        //2.循环遍历求li的宽度和
        $ulContainer.children().each(function (index, element) {
            lisWidth += element.clientWidth;
        });
        //当nav-tab的宽度大于屏幕的宽度时在设置宽度
        if (lisWidth > $(window).width()) {
            $ulContainer.css('width', lisWidth);
            $('.ul-wrapper').css('overflow-x', 'scroll');
        } else {
            $ulContainer.css('width', '100%');
            $('.ul-wrapper').css('overflow-x', '');
        }
    }

    $(window).on('resize', resize).trigger('resize');

    var $newsTitle = $('.news-title');
    //给新闻列表的a注册点击事件
    $('#news .nav-pills a').on('click', function () {
        var $this = $(this);
        $newsTitle.text($this.data('title'));
    });
    ;
});