$(function(){
  var winScrollTop;
  var flag = 0;
  // jQuery で複数のオブジェクトに対して繰り返し処理を行う場合は、each() メソッドを使用します。
  $('.c-menu-trigger').each(function(){
    $(this).on('click',function(){
      if( flag == 0){
  // スクロール位置を取得するためには scrollTop() メソッドを使います。 ブラウザ全体のスクロール位置を取得する。
        winScrollTop = $(window).scrollTop(); 
        $(".c-menu-trigger").addClass('active');
        $(".menu-wrapper").fadeIn();
        flag = "1";
      } else {
        // Window.scrollTo() は文書内の特定の組み合わせの座標までスクロールします。
        window.scrollTo( 0 , winScrollTop );
        $(".c-menu-trigger").removeClass('active');
        $(".menu-wrapper").fadeOut();
        flag = 0;
      }
      $("#c-dl-menu").fadeIn(400);
      return false;
    });
  });
  $('.c-dl-close a').on('click', function () {
    window.scrollTo( 0 , winScrollTop );
    if( flag == 1){
      $(".c-menu-trigger").removeClass('active');
      flag = 0;
    }
  	$(".c-dl-menu").fadeOut();
  	return false;
  });

  $(window).on("scroll", function() {
    // すべての .item を取得
    const item = $(".item");
    item.each(function() {
      // .item のオフセットの高さを取得
      const targetTop = $(this).offset().top;
      // 画面のスクロール量 + 350px > .item のオフセットの高さを取得
      if ($(window).scrollTop() + 350 > targetTop) {
        // .item にクラス .show を追加
        $(this).addClass("show");
      }
    });
  });

  $(window).on("scroll", function() {
    // すべての .bar を取得
    const bar = $(".bar");
    bar.each(function() {
      // .bar のオフセットの高さを取得
      const targetPop = $(".bar").offset().top;
      // 画面のスクロール量 *3.05 > .bar のオフセットの高さを取得
      if ($(window).scrollTop()*3.05 > targetPop) {
        // . にクラス .show を追加
        $(".bar").addClass("show");
      }
    });
  });

});