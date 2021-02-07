//= require rails-ujs
//= require activestorage

import $ from "jquery";

document.addEventListener("DOMContentLoaded", function () {
  // フォームの中身を取得
  let form = document.querySelector(".js-text_field");
  form.addEventListener("keyup", function () {
    let formValue = form.value.trim();

    $.ajax({
      type: "GET", // リクエストのタイプ
      url: "/posts/searches", // リクエストを送信するURL
      data: { title: formValue }, // サーバーに送信するデータ
      dataType: "json", // サーバーから返却される型
    }).done(function (data) {
      $(".js-messages li").remove();

      $(data).each(function (i, post) {
        $(".js-messages").append(
          `<li class="message"><a href="/posts/${post.id}">${post.title}</a></li>`
        );
      });
    });
  });
});
