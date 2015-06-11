$(document).ready(function(){
$('.blue').mouseover(function(){
                           $('.blueface').show();
                         });
$('.blue').mouseout(function(){
                           $('.blueface').hide();
                         });
$('.badgreen').mouseover(function(){
                           $('.badgreenface').show();
                         });
$('.badgreen').mouseout(function(){
                           $('.badgreenface').hide();
                         });
$('.sillygreen').mouseover(function(){
                           $('.sillygreenface').show();
                         });
$('.sillygreen').mouseout(function(){
                           $('.sillygreenface').hide();
                         });
$('.notquitegreen').mouseover(function(){
                           $('.notquitegreenface').show();
                         });
$('.notquitegreen').mouseout(function(){
                           $('.notquitegreenface').hide();
                         });
$('.almostgreen').mouseover(function(){
                           $('.almostgreenface').show();
                         });
$('.almostgreen').mouseout(function(){
                           $('.almostgreenface').hide();
                         });
$('.green').mouseover(function(){
                           $('.greenface').show();
                         });
$('.green').mouseout(function(){
                           $('.greenface').hide();
                         });
});
$(function() {
    // run the effect
    function runEffect() {
      // select the effect
      var selectedEffect = "blind";
 
      // most effect types need no options passed by default
      var options = {};
      // run the effect
      $( "#show_effect" ).show( selectedEffect, options, 1200, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#show_effect:visible" ).removeAttr( "style" ).fadeOut();
      }, 15000 );
    };
 
    // set effect from select menu value
    $( "#about_me_button" ).click(function() {
      runEffect();
    });
 
    $( "#show_effect" ).hide();
  });
