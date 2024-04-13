(function () {
  const viewport = document.querySelector('meta[name="viewport"]');

  function switchViewport() {}
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

jQuery(function ($) {
  // デバイスがモバイルかPCかを判定
  var isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;
  var hoverDelayTimer; // ホバーイベントの遅延用タイマー

  // PC用：メガメニューとナビゲーション項目のホバー管理
  function setupHoverEvents(menuSelector, megaMenuSelector) {
    $(menuSelector)
      .mouseenter(function () {
        clearTimeout(hoverDelayTimer);
        $(".p-global-menu").not(megaMenuSelector).removeClass("is-open");
        $(".p-nav__item").not(this).removeClass("is-open");
        $(megaMenuSelector).addClass("is-open");
        $(this).addClass("is-open");
        $("#js-mask").addClass("is-open");
      })
      .mouseleave(function () {
        hoverDelayTimer = setTimeout(function () {
          if (
            !$(megaMenuSelector + ":hover").length &&
            !$(menuSelector + ":hover").length
          ) {
            $(megaMenuSelector).removeClass("is-open");
            $(menuSelector).removeClass("is-open");
            $("#js-mask").removeClass("is-open");
          }
        }, 300); // メガメニューへの移動に十分な遅延時間
      });

    $(megaMenuSelector)
      .mouseenter(function () {
        clearTimeout(hoverDelayTimer);
      })
      .mouseleave(function () {
        hoverDelayTimer = setTimeout(function () {
          $(megaMenuSelector).removeClass("is-open");
          $(menuSelector).removeClass("is-open");
          $("#js-mask").removeClass("is-open");
        }, 300);
      });
  }

  if (!isMobile) {
    setupHoverEvents("#js-menu-furniture", "#js-mega-furniture");
    setupHoverEvents("#js-menu-appliances", "#js-mega-appliances");
  }

  // モバイル用：メガメニューの開閉ボタンのクリックイベント
  $("#js-menu-furniture, #js-menu-appliances").on("click", function (e) {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation(); // イベント伝播を阻止
      var targetMegaMenu = $(this).is("#js-menu-furniture")
        ? "#js-mega-furniture"
        : "#js-mega-appliances";

      // 同じメニュー項目を再度クリックした場合の処理
      if ($(this).hasClass("is-open")) {
        $(targetMegaMenu).removeClass("is-open");
        $(this).removeClass("is-open");
        $("#js-mask").removeClass("is-open");
      } else {
        // 他のメガメニューを閉じて、対象のメガメニューを開く
        $(".p-global-menu").not(targetMegaMenu).removeClass("is-open");
        $(".p-nav__item").not(this).removeClass("is-open");
        $(targetMegaMenu).addClass("is-open");
        $(this).addClass("is-open");
        $("#js-mask").addClass("is-open");
      }
    }
  });

  // メガメニュー内のリンクをクリックした際や、メニュー外をクリックした際の処理
  $(".p-global-menu a, document").on("click", function (e) {
    if (
      !$(e.target).closest(".p-global-menu, .p-nav__item").length ||
      $(e.target).is(".p-global-menu a")
    ) {
      $(".p-global-menu, #js-mask, .p-nav__item").removeClass("is-open");
    }
  });

  // メニュー外のクリックでメガメニューを閉じる
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".p-global-menu, .p-nav__item").length) {
      $(".p-global-menu, #js-mask, .p-nav__item").removeClass("is-open");
    }
  });

  // イベント伝播を阻止するための処理
  $(".p-global-menu, .p-nav__item").on("click", function (e) {
    e.stopPropagation();
  });
});

// fade-in
ScrollReveal().reveal(".fade1", {
  // アニメーションが完了するまでの時間
  duration: 1000,
  // アニメーション開始までの時間
  delay: 500,
});

ScrollReveal().reveal(".fade2", {
  // アニメーションが完了するまでの時間
  duration: 1500,
  // アニメーション開始までの時間
  delay: 1000,
});

ScrollReveal().reveal(".fade3", {
  // アニメーションが完了するまでの時間
  duration: 2000,
  // アニメーション開始までの時間
  delay: 1500,
});
ScrollReveal().reveal(".fade4", {
  // アニメーションが完了するまでの時間
  duration: 2500,
  // アニメーション開始までの時間
  delay: 2000,
});
ScrollReveal().reveal(".fade5", {
  // アニメーションが完了するまでの時間
  duration: 3000,
  // アニメーション開始までの時間
  delay: 2500,
});
