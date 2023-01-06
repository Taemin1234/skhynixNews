$(function () {
  lnbShow(); //gnb호버 시 lnb 나타남
  mgnb(); // 모바일 화면에서 gnb 동작
  searchClk(); // 서치버튼 클릭
  language("A"); //헤더 언어 선택
  language("B"); //푸터 언어 선택
  slickJs(); // 메인 슬라이드 - 자동 움직임 세팅
  goTop(); // 맨위로 가는 버튼
  newsTab(); // 뉴스 탭 클릭
  chkbox(); // 체크박스 중복 해제
});

function lnbShow() {
  let gnblist = $(".gnb-list ul");
  let lnbwrap = $(".lnb-wrap");

  gnblist.on("mouseover", function () {
    lnbwrap.stop().show();
  });

  gnblist.on("mouseleave", function (e) {
    y = e.clientY;

    if (y <= 75) {
      lnbwrap.hide();
    }
  });

  lnbwrap.on("mouseleave", function () {
    lnbwrap.hide();
  });
}

function mgnb() {
  let hamburger = $(".hamburger");
  let close = $(".ico-close");
  let plus = $(".ico-plus");
  let minus = $(".ico-minus");

  let mgnbWrap = $(".mgnb-wrap");
  let mlnbList = $(".mlnb-list");

  hamburger.on("click", function () {
    hamburger.hide();
    close.show();

    mgnbWrap.show();
  });

  close.on("click", function () {
    hamburger.show();
    close.hide();

    mgnbWrap.hide();
  });

  plus.on("click", function () {
    $(this).parents(".mgnb-list").find(mlnbList).show();
    $(this).hide();
    $(this).siblings(minus).show();
  });

  minus.on("click", function () {
    $(this).parents(".mgnb-list").find(mlnbList).hide();
    $(this).hide();
    $(this).siblings(plus).show();
  });
}

function searchClk() {
  let gnbw = $(".gnb-wrap");

  $(".search").on("click", function () {
    gnbw.addClass("search-on");
  });

  $(".ico-searchClose").on("click", function () {
    gnbw.removeClass("search-on");
  });
}

function language(al) {
  let langu = $(`.language${al}`);
  let langSel = $(`.language-sel${al}`);

  langu.on("click", function (e) {
    e.stopPropagation();
    langSel.show();
  });

  $("html").click(function (e) {
    if (!$(e.target).hasClass("language-sel")) {
      langSel.hide();
    }
  });
}

function slickJs() {
  let prgrBar = $(".progressbar");

  $(".slide-content-wrap").slick({
    Infinity: true,
    dots: true,
    arrows: true,
    dotsClass: "slick-dots",
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $(".slick-slider").on("afterChange", function () {
    prgrBar.addClass("progress-active");
  });
  $(".slick-slider").on("beforeChange", function () {
    prgrBar.removeClass("progress-active");
  });
}

function goTop() {
  let top = $(".btn-top");

  top.on("click", function () {
    $("html").animate({ scrollTop: 0 }, 700);
  });
}

function newsTab() {
  let tab = $(".tab");
  let lnIn = $(".nl-inner");

  for (let i = 0; i < tab.length; i++) {
    tab.eq(i).on("click", function () {
      tab.eq(i).addClass("active");
      tab.not(this).removeClass("active");

      lnIn.eq(i).show();
      lnIn.not(lnIn.eq(i)).hide();
    });
  }
}

function chkbox() {
  $('input[type="checkbox"][name="ncChk"]').on("click", function () {
    if ($(this).prop("checked")) {
      $('input[type="checkbox"][name="ncChk"]').prop("checked", false);

      $(this).prop("checked", true);
    }
  });
}
