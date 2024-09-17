jQuery(document).ready(function () {
    let slideCount =  jQuery("#slider ul li").length;
    let slideWidth = jQuery("#slider ul li").width();
    let slideheight = jQuery("#slider ul li").height();
    let slideAllWidth = slideCount * slideWidth;
    console.log(slideAllWidth);
    jQuery("#slider").css({width:slideWidth,height:slideheight});

    jQuery("#slider a.control_next").click(function () {
        jQuery("#slider ul li:last-child").prependTo("#slider ul");
    });

    jQuery("#slider a.control_prev").click(function () {
        jQuery("#slider ul li:first-child").appendTo("#slider ul");

    });
    

})