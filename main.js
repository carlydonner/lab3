$(document).ready(function(){
  $("#titlename").click(function(){
    $("body").hide();
  })
  $("#titlename").hover(function(){
    $(this).css("color","lime");
  },
  function(){
    $(this).css("color","#832c9e");
  })
  $( "p" ).on( "mouseover", function() {
    $( this ).css( "color", "red" );
  });
})
