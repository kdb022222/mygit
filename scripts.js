$(".navi").mouseover(function(){
    $(this).find('li').stop().slideDown();
});

$(".navi").mouseout(function(){
    $(this).find('li').stop().slideUp();
});
var slides =$(".slide a");
slides.hide();
slides.first().show();
var currentIndex = 0; //초기화



setInterval(function(){
slides.eq(currentIndex).fadeOut(1000);
currentIndex = (currentIndex+1) % slides.length;
slides.eq(currentIndex).fadeIn(1000);
},3000);

$(".notice ul>a").click(function(){
$(".notice ul div").addClass("testclass");
$(this).siblings("div").removeClass("testclass");    
// $(this).parent().siblings().removeClass("testclass");
// $(this).parent().addClass("testclass");

})

$(".closebtn").click(function(){

    $(".popup").hide();

})

// $(".notis li:first").click(function(){

//     $(."popup").show();
// }

$(".notis li:first").click(function(){

    $(".popup").show();

})