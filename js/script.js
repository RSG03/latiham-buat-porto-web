// event pada saat link di klik

// memanggil event pada jquery

$('.page-scroll').on('click',function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
    
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1000,'easeInOutExpo');
    // console.log($('html,body').scrollTop());
    // console.log(elemenTujuan.offset().top);

    e.preventDefault();


});
// about
// $(window).on('load',function() {
//    $('.kiri').addClass('muncul');
//    $('.kanan').addClass('muncul');
// }); 

// parrllax
$(window).scroll(function() {
   var wScroll =  $(window).scrollTop();

   // about
   if (wScroll > $('.about').offset().top -150){
      $('.about .kiri').addClass('muncul');
      $('.about .kanan').addClass('muncul');
   }

   else{
       $('.about .kiri').removeClass('muncul');
      $('.about .kanan').removeClass('muncul');
   }
   
   // jumbotron

   $(".jumbotron img").css({
    "transform": "translate(0px, "+ wScroll/6 +"%)", 
    "width": ( (wScroll/3) + 200 )+"px", 
    "height": ( (wScroll/3) + 200 )+"px", 
    "opacity": (1 - wScroll/400)
   });

   $(".jumbotron h1").css({
      "transform": "translate(0px, "+ wScroll/2 +"%)", 
      "letterSpacing": wScroll/30+"px"
   });

   $(".jumbotron p").css({
      "transform": "translate(0px, "+ wScroll +"%)", 
      "letterSpacing": wScroll/60+"px"
   });


    // portfolio
   if(wScroll > $(".portfolio").offset().top - 250 ) {
        $(".portfolio .thumbnail").each(function(i){
           setTimeout(function(){
              $(".portfolio .thumbnail").eq(i).addClass("muncul");
            }, 300 * (i+1));
        });
   }
    
   else {
        $(".portfolio .thumbnail").each(function(i){
            setTimeout(function(){
               $(".portfolio .thumbnail").eq(i).removeClass("muncul");
            }, 300 * (i+1));
         });
   }

      // $('.pKiri').addClass('.pMuncul');
      // $('.pKanan').addClass('.pMuncul');

   //  if(wScroll >= $(".about").offset().top - 10 ) {
   //     $('.about .col-sm-5').addClass('muncul')
   //  }
      
  
   //  else {
   //    $('.about .col-sm-5').removeClass('muncul')
   //  } 


    // if(wScroll < $(".portfolio").offset().bottom +200) {
    //     $(".portfolio .thumbnail").each(function(i){
    //        setTimeout(function(){
    //           $(".portfolio .thumbnail").eq(i).addClass("muncul");
    //        }, 300 * (i+1));
    //     });
    // }else{
    //     $(".portfolio .thumbnail").each(function(i){
    //         setTimeout(function(){
    //            $(".portfolio .thumbnail").eq(i).removeClass("muncul");
    //         }, 300 * (i+1));
    //      });
    // }

    // About
  
});
