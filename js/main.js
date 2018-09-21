$(document).ready(function(){

    $('.top-nav .collapse-menu').click(function(){
        $(this).toggleClass('active')
    });

    var myArray = [
        'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',
        'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
        'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
        'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)',
        'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
        'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
        'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)',
        'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
        'linear-gradient(to top, #f77062 0%, #fe5196 100%)',
        'linear-gradient(60deg, #29323c 0%, #485563 100%)',
        'linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)',
        'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
        'linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)',
        'linear-gradient(to top, #209cff 0%, #68e0cf 100%)',
        'linear-gradient(to top, #cc208e 0%, #6713d2 100%)',
        'linear-gradient(to right, #243949 0%, #517fa4 100%)',
        'linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)',
        'linear-gradient(to right, #0acffe 0%, #495aff 100%)'
        ];  
    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];

    $('.text-area .output-part .card').css('background-image',rand);

    var v = ( $(window).width() > 768 )? 85 : 60;

    $('.page-content').css('max-height', $(window).height() - v);

    $('.menu-icon').click(function(){
        $('.top-nav .menu-icon li .dropdown-menu').slideToggle();
    });
    $('.page-content').scroll(function(){
        console.log("hi");
        
        if($(this).scrollTop()>0)
        {
            $('.top-nav').addClass('scrolled');  
        }
        else
        {
            $('.top-nav').removeClass('scrolled'); 
        }
    });

    $(window).resize(function () {
        var v = ( $(window).width() > 768 )? 85 : 60;
        $('.page-content').css('max-height', $(window).height() - v );
    });
    setInterval(function(){ 
        
        var v = ( $(window).width() > 768 )? 85 : 60;
        
        $('.page-content').css('max-height', $(window).height() - v );
     }, 500);
});