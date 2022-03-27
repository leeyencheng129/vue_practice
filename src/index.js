import $ from "jquery";

import "./css/index.css";
import "./css/index.less";

import logo from "./images/images.png";
$(".box").attr("src", logo);

$(function () {
  $("li:odd").css("background", "red");
  $("li:even").css("background", "blue");
});

//定義裝飾器函數
function info(target) {
  target.info = "Person info.";
}

//定義普通的類
@info
class Person {}

console.log(Person.info);
