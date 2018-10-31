// Check off specific todos by clicking
// $("ul")是因為每次新增時，是影響整體，而非只有單數個li
$("ul").on("click" , "li" , function () { 
    //if li is gray
    // if ($(this).css("color") === "rgb(128, 128, 128)") { //color傳出的值是rgb數值，打gray則兩者不相等
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none" // JS不容許「-」符號
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through" // JS不容許「-」符號
    //     });
    // }
    
    //以上可以直接縮成這行
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click" , "span" , function(event) { 
    //第一層添加parent：連同父母做fadeOut的效果
    $(this).parent().fadeOut(500, function() {
        //第二層不添加parent，否則是整個ul全砍
        //$(this).parent().remove(); 
        $(this).remove(); 
    })
    

    //先是body->container->ul->span的順序
    //基本上span被涵蓋在許多element下
    //所以當span進行動作的時候，連同父母也跟著動作
    //使用stopPropagation()則可以把父母的動作停止
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {//表示按下enter鍵
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})