
import $ from "jquery"

import "./css/index.css"
import "./css/index.less"

$(function(){
    //隔行变色效果
    $('li:odd').css("backgroundColor","red")
    $('li:even').css("backgroundColor","blue")
})
