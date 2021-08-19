
const yakor = document.querySelectorAll('a[href*="#"]')

for(let anchor of yakor) {
  anchor.addEventListener("click", function(a) {
    a.preventDefault()
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
};

let $btnTop = $(".bttop")
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 1000){
    $btnTop.fadeIn();
  }else{
    $btnTop.fadeOut();
  }
});

$btnTop.on("click", function (){ 
  $("html,body").animate({scrollTop:0}, 1000)
});

let arrow = function () {
  let data = $(".accordion").attr("data-accordion");

  $(".block1").on("click", function () {
    if (data === "close"){
      $(".block1_body").slideUp();
      if($(this).hasClass("active")){
        $(this).toggleClass("active");
      }
      else{
        $(".block1").removeClass("active");
      }
    } 
    else {
      $(this).toggleClass("active");
    }
    $(this).next(".block1_body").not(":animated").slideToggle()
  });
}
  arrow();
